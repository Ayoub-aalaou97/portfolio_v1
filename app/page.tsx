import Image from "next/image";
import MyImg from "@/public/img/myImg.png"

import { TbDownload } from "react-icons/tb";

import { TbMail } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";



export default function Home() {
  return (
    <main className="my-8">
      <div className="info-wrapper container mx-auto max-w-[600px] flex flex-col items-center">
        <Image 
          src={MyImg}
          width={150}
          height={150}
          alt="My image"
        />
        <h1 className="mt-4 text-2xl"><span className="gradient-title">Hey</span> 👋🏻, <span className="gradient-title">Ayoub Aalaou</span></h1>
        <p className="text-center mt-4">I am proficient in HTML, CSS, Bootstrap, Sass, and JavaScript frameworks like jQuery, while also working with backend technologies such as PHP, C#, and Java. Additionally, I prioritize clean code and testing (using tools like Playwright, Cypress, and Mocha) to ensure high-quality results.

I’m a passionate web developer with experience in both frontend and backend technologies, including PHP, JavaScript, C#, Bootstrap, and MySQL. I specialize in object-oriented development, optimizing web applications, and creating user-friendly interfaces.</p>
        <div className="flex mt-4">
          <a className="mr-4" href="#"><TbDownload size={24} /></a>
          <a className="mr-4" href="#"><TbMail size={24} /></a>
          <a className="mr-4" href="#"><TbBrandLinkedin size={24} /></a>
          <a className="mr-4" href="#"><TbBrandGithub size={24} /></a>

        </div>
      </div>
    </main>
  );
}
