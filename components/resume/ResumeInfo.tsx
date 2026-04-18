import Image from 'next/image'
import myImg from '@/public/img/myImg.png'
import { TbDownload, TbMapPin } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";

const ResumeInfo = () => {
  return (
    <div className="resume-info-container mt-6 grid grid-cols-1 gap-6 sm:mt-8 lg:grid-cols-4 lg:gap-4">
      <div className="resumeInfo order-2 min-w-0 lg:order-1 lg:col-span-3 lg:pr-4">
        <h1 className='text-xl pt-2 sm:text-2xl sm:pt-4'>Ayoub Aalaou</h1>
        
        <div className='mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
          <p className='flex shrink-0 items-center gap-1 text-sm sm:text-base'><TbMapPin size={24} className="shrink-0" /> Hamburg</p>
          <div className='flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end sm:pr-4'>
            <a href="#" aria-label="Download resume"><TbDownload size={24} /></a>
            <a href="#" aria-label="Email"><TbMail size={24} /></a>
            <a href="#" aria-label="LinkedIn"><TbBrandLinkedin size={24}/></a>
            <a href="#" aria-label="GitHub"><TbBrandGithub size={24} /></a>
          </div>
        </div>
        <div>
          <h3 className='title-underline mt-4 text-xl sm:text-2xl'>About me</h3>
          <p className='mt-2 pl-0 text-sm leading-relaxed sm:pl-4 sm:text-base'>
            I am proficient in HTML, CSS, Bootstrap, Sass, and JavaScript frameworks like jQuery, while also working with backend technologies such as PHP, C#, and Java. Additionally, I prioritize clean code and testing (using tools like Playwright, Cypress, and Mocha) to ensure high-quality results. I’m a passionate web developer with experience in both frontend and backend technologies, including PHP, JavaScript, C#, Bootstrap, and MySQL. I specialize in object-oriented development, optimizing web applications, and creating user-friendly interfaces
          </p>
        </div>
      </div>
      <Image
        className='order-1 mx-auto h-auto w-full max-w-[200px] justify-self-center object-contain lg:order-2 lg:col-span-1 lg:mx-0 lg:max-w-none lg:justify-self-end'
        src={myImg}
        alt='Resume image'
        width={200}
        height={200}
        sizes="(max-width: 1024px) 200px, 200px"
      />
    </div>
  )
}

export default ResumeInfo