import Experience from "@/components/resume/Experience";
import Education from "@/components/resume/Education";
import experienceDataDe from "@/data/resume/de/experiences.json";
import experienceDataEn from "@/data/resume/en/experiences.json";
import educationDataDe from "@/data/resume/de/educations.json";
import educationDataEn from "@/data/resume/en/educations.json";
import ResumeSkills from "@/components/resume/Skill";
import Hobby from "@/components/resume/Hobby";
import ResumeInfo from "@/components/resume/ResumeInfo";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ResumePage");

  const experienceData = locale === "en" ? experienceDataEn : experienceDataDe;
  const educationData = locale === "en" ? educationDataEn : educationDataDe;

  return (
    <section className="px-4 pb-10 sm:px-6">
      <div className="resume-wrapper container mx-auto w-full max-w-[1080px]">
        <ResumeInfo />

        <h1 className="title-underline mt-4 text-2xl">{t("experience")}</h1>
        {experienceData.map((exp) => (
          <Experience
            key={exp.company}
            company={exp.company}
            location={exp.location}
            period={exp.period}
            position={exp.position}
            tasks={exp.tasks}
            website={exp.website}
          />
        ))}

        <h1 className="title-underline mt-4 text-2xl">{t("education")}</h1>
        {educationData.map((edu) => (
          <Education
            key={edu.school}
            school={edu.school}
            desc={edu.desc}
            location={edu.location}
            period={edu.period}
            website={edu.website}
          />
        ))}

        <h1 className="title-underline mt-4 text-2xl">{t("skills")}</h1>
        <ResumeSkills />

        <h1 className="title-underline mt-4 text-2xl">{t("hobbies")}</h1>
        <Hobby />
      </div>
    </section>
  );
}
