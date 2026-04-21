"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyResolvedTheme(resolvedTheme: ResolvedTheme) {
  const root = document.documentElement;
  root.classList.toggle("dark", resolvedTheme === "dark");
  root.style.colorScheme = resolvedTheme;
}

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}

export function ThemeProvider({
  children,
  storageKey = "portfolio-theme",
  defaultTheme = "system",
  enableSystem = true,
}: {
  children: React.ReactNode;
  storageKey?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (isTheme(stored)) return stored;
    } catch {
      // ignore
    }
    return defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    if (typeof window === "undefined") return "light";
    // On client, prefer the already-applied class to avoid flicker during remounts
    const alreadyDark = document.documentElement.classList.contains("dark");
    return alreadyDark ? "dark" : "light";
  });

  // Keep resolved theme in sync and apply to <html> (before paint).
  useIsomorphicLayoutEffect(() => {
    const shouldUseSystem = enableSystem && theme === "system";
    const nextResolved = shouldUseSystem
      ? getSystemTheme()
      : (theme as ResolvedTheme);

    setResolvedTheme(nextResolved);
    applyResolvedTheme(nextResolved);
  }, [enableSystem, theme]);

  // React to system theme changes when in "system" mode.
  useEffect(() => {
    if (!(enableSystem && theme === "system")) return;

    const mql: MediaQueryList = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const onChange = () => {
      const nextResolved = getSystemTheme();
      setResolvedTheme(nextResolved);
      applyResolvedTheme(nextResolved);
    };

    // Modern browsers
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [enableSystem, theme]);

  // Sync theme across tabs.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) return;
      const next = e.newValue as Theme | null;
      if (next === "light" || next === "dark" || next === "system") {
        setThemeState(next);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [storageKey]);

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      setThemeState(nextTheme);
      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch {
        // ignore
      }
    },
    [storageKey]
  );

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [resolvedTheme, setTheme, theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
