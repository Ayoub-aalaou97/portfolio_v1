import Image from "next/image";
import MyImg from "@/public/img/myImg.png"

import { TbDownload } from "react-icons/tb";

import { TbMail } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";



export default function Home() {
  return (
    <main className="my-6 px-4 sm:my-8 sm:px-6">
      <div className="info-wrapper container mx-auto flex w-full max-w-[600px] flex-col items-center">
        <Image 
          src={MyImg}
          width={150}
          height={150}
          alt="My image"
          className="h-auto w-[min(150px,40vw)] max-w-[150px]"
          sizes="(max-width: 640px) 40vw, 150px"
          priority
        />
        <h1 className="mt-4 px-1 text-center text-xl leading-snug sm:text-2xl"><span className="gradient-title">Hey</span> 👋🏻, <span className="gradient-title">Ayoub Aalaou</span></h1>
        <p className="mt-4 text-center text-sm leading-relaxed sm:text-base">I am proficient in HTML, CSS, Bootstrap, Sass, and JavaScript frameworks like jQuery, while also working with backend technologies such as PHP, C#, and Java. Additionally, I prioritize clean code and testing (using tools like Playwright, Cypress, and Mocha) to ensure high-quality results.

I’m a passionate web developer with experience in both frontend and backend technologies, including PHP, JavaScript, C#, Bootstrap, and MySQL. I specialize in object-oriented development, optimizing web applications, and creating user-friendly interfaces.</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a className="inline-flex" href="#" aria-label="Download resume"><TbDownload size={24} /></a>
          <a className="inline-flex" href="#" aria-label="Email"><TbMail size={24} /></a>
          <a className="inline-flex" href="#" aria-label="LinkedIn"><TbBrandLinkedin size={24} /></a>
          <a className="inline-flex" href="#" aria-label="GitHub"><TbBrandGithub size={24} /></a>
        </div>
      </div>
    </main>
  );
}
