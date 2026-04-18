import Image from 'next/image'
import myImg from '@/public/img/myImg.png'
import { TbDownload, TbMapPin } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";

const ResumeInfo = () => {
  return (
    <div className="resume-info-container mt-8 grid grid-cols-4 gap-4">
      <div className="resumeInfo col-span-3 pr-4">
        <h1 className='text-2xl pt-4'>Ayoub Aalaou</h1>
        
        <div className='flex justify-between mt-4'>
          <p className='flex'><TbMapPin size={24}/> Hamburg</p>
          <div className='flex pr-4'>
            <a href="#"><TbDownload size={24} /></a>
            <a className="ml-4" href="#"><TbMail size={24} /></a>
            <a className="ml-4" href="#"><TbBrandLinkedin size={24}/></a>
            <a className="ml-4" href="#"><TbBrandGithub size={24} /></a>
          </div>
        </div>
        <div>
          <h3 className='title-underline mt-4 text-2xl'>About me</h3>
          <p className='pl-4 mt-2'>
            I am proficient in HTML, CSS, Bootstrap, Sass, and JavaScript frameworks like jQuery, while also working with backend technologies such as PHP, C#, and Java. Additionally, I prioritize clean code and testing (using tools like Playwright, Cypress, and Mocha) to ensure high-quality results. I’m a passionate web developer with experience in both frontend and backend technologies, including PHP, JavaScript, C#, Bootstrap, and MySQL. I specialize in object-oriented development, optimizing web applications, and creating user-friendly interfaces
          </p>
        </div>
      </div>
      <Image
        className='col-span-1'
        src={myImg}
        alt='Resume image'
        width={200}
        height={100}
      />
    </div>
  )
}

export default ResumeInfo