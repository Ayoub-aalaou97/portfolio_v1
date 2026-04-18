import Experience from '@/components/resume/Experience';
import Education from '@/components/resume/Education';
import experienceData from '@/data/resume/de/experiences.json'
import educationData from '@/data/resume/de/educations.json'
import ResumeSkills from '@/components/resume/Skill';
import Hobby from '@/components/resume/Hobby';
import ResumeInfo from '@/components/resume/ResumeInfo';

const Resume = () => {

  return (
    <section className="px-4 pb-10 sm:px-6">
      <div className="resume-wrapper container mx-auto w-full max-w-[1080px]">

        <ResumeInfo />

      {/* Experience */}
      <h1 className='title-underline text-2xl mt-4'>Experience</h1>
      {
        experienceData.map(exp => (          
          <Experience
            key={exp.company}
            company={exp.company}
            location={exp.location}
            period={exp.period}
            position={exp.position}
            tasks={exp.tasks}
            website={exp.website}
          /> 
        ))
      }

      {/* Education */}
      <h1 className='title-underline text-2xl mt-4'>Education</h1>
      {
        educationData.map(edu => (          
          <Education
            key={edu.school}
            school={edu.school}
            desc={edu.desc}
            location={edu.location}
            period={edu.period}
            website={edu.website}
          /> 
        ))
      }


      {/* skills */}
      <h1 className='title-underline text-2xl mt-4'>Skills</h1>
      <ResumeSkills/>

      {/* Hobbys */}
      <h1 className='title-underline text-2xl mt-4'>Hobbys</h1>
      <Hobby/>


      </div>
    </section>
  )
}

export default Resume;