"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbMoon, TbSun } from "react-icons/tb";

/** Pill switch: sun or moon sits inside the sliding knob. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="h-6 w-12 shrink-0 rounded-full bg-zinc-200 dark:bg-zinc-700"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group inline-flex shrink-0 cursor-pointer items-center rounded-full border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-[#42b883] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--page-bg)]"
    >
      <span
        className={`relative inline-block h-6 w-12 rounded-full transition-colors duration-200 ease-out ${
          isDark ? "bg-[#42b883]" : "bg-zinc-300 dark:bg-zinc-600"
        }`}
      >
        <span
          className={`pointer-events-none absolute left-[2px] top-[2px] z-10 flex size-5 items-center justify-center rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] ring-1 ring-black/5 transition-transform duration-200 ease-out ${
            isDark ? "translate-x-6" : "translate-x-0"
          }`}
        >
          {isDark ? (
            <TbMoon size={13} className="text-slate-700" aria-hidden />
          ) : (
            <TbSun size={13} className="text-amber-600" aria-hidden />
          )}
        </span>
      </span>
    </button>
  );
}
