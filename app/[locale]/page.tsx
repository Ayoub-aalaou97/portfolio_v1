import Image from "next/image";
import MyImg from "@/public/img/myImg.png";
import { TbDownload, TbMail, TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");

  return (
    <main className="my-6 px-4 sm:my-8 sm:px-6">
      <div className="info-wrapper container mx-auto flex w-full max-w-[600px] flex-col items-center">
        <Image
          src={MyImg}
          width={150}
          height={150}
          alt={t("imageAlt")}
          className="h-auto w-[min(150px,40vw)] max-w-[150px]"
          sizes="(max-width: 640px) 40vw, 150px"
          priority
        />
        <h1 className="mt-4 px-1 text-center text-xl leading-snug sm:text-2xl">
          <span className="gradient-title">{t("titleHey")}</span> 👋🏻,{" "}
          <span className="gradient-title">{t("titleName")}</span>
        </h1>
        <p className="mt-4 text-center text-sm leading-relaxed sm:text-base">
          {t("bioP1")}
        </p>
        <p className="mt-3 text-center text-sm leading-relaxed sm:text-base">
          {t("bioP2")}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a
            className="inline-flex"
            href="/doc/Lebenslauf.pdf"
            aria-label={t("ariaDownload")}
            download
          >
            <TbDownload size={24} />
          </a>
          <a
            className="inline-flex"
            href="mailto:aalaou.ayoub97@gmail.com"
            aria-label={t("ariaEmail")}
          >
            <TbMail size={24} />
          </a>
          <a
            className="inline-flex"
            href="https://www.linkedin.com/in/ayoub-aalaou/"
            aria-label={t("ariaLinkedIn")}
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandLinkedin size={24} />
          </a>
          <a
            className="inline-flex"
            href="https://github.com/Ayoub-aalaou97"
            aria-label={t("ariaGitHub")}
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandGithub size={24} />
          </a>
        </div>
      </div>
    </main>
  );
}
