import Image from "next/image";
import myImg from "@/public/img/myImg.png";
import { TbDownload, TbMapPin } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { getTranslations } from "next-intl/server";

const ResumeInfo = async () => {
  const t = await getTranslations("ResumeInfo");

  return (
    <div className="resume-info-container mt-6 grid grid-cols-1 gap-6 sm:mt-8 lg:grid-cols-4 lg:gap-4">
      <div className="resumeInfo order-2 min-w-0 lg:order-1 lg:col-span-3 lg:pr-4">
        <h1 className="text-xl pt-2 sm:text-2xl sm:pt-4">Ayoub Aalaou</h1>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <p className="flex shrink-0 items-center gap-1 text-sm sm:text-base">
            <TbMapPin size={24} className="shrink-0" /> Hamburg
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end sm:pr-4">
            <a href="/doc/Lebenslauf.pdf" aria-label={t("ariaDownload")} download>
              <TbDownload size={24} />
            </a>
            <a
              href="mailto:aalaou.ayoub97@gmail.com"
              aria-label={t("ariaEmail")}
            >
              <TbMail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayoub-aalaou/"
              aria-label={t("ariaLinkedIn")}
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Ayoub-aalaou97"
              aria-label={t("ariaGitHub")}
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandGithub size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="title-underline mt-4 text-xl sm:text-2xl">
            {t("aboutTitle")}
          </h3>
          <p className="mt-2 pl-0 text-sm leading-relaxed sm:pl-4 sm:text-base">
            {t("aboutBody")}
          </p>
        </div>
      </div>
      <Image
        className="order-1 mx-auto h-auto w-full max-w-[200px] justify-self-center object-contain lg:order-2 lg:col-span-1 lg:mx-0 lg:max-w-none lg:justify-self-end"
        src={myImg}
        alt={t("imageAlt")}
        width={200}
        height={200}
        sizes="(max-width: 1024px) 200px, 200px"
      />
    </div>
  );
};

export default ResumeInfo;
