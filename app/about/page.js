import Image from 'next/image';
import { FaAward, FaUserTie, FaSmileBeam, FaDownload } from 'react-icons/fa';

import profile from '@/assets/profile.png'
import Skills from '@/components/skills';

export default function AboutMe() {
  return (
    <>
  
    <section className=" text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          src={profile} // Your profile picture
          alt="profile"
          className="w-32 h-32 rounded-full border-4 border-green-600"
          width={128}
          height={128}
        />
        <br />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-rose-500">
            Mast Ujawal
          </h1>
          <p className="mb-8 leading-relaxed text-yellow-300">
            25 Years Old, Bangalore, Freelance Available
          </p>
          <div className="flex justify-center">
            <a href="/Steve_Milner_CV.pdf" download className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              <FaDownload className="mr-2"/> Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex px-5 py-0 justify-center">
        <div className="flex items-center space-x-4">
          <div className="p-4">
            <FaUserTie className="text-yellow-500 w-12 h-12 mb-1 inline-block"/>
            <h2 className="title-font font-medium text-3xl text-rose-300">3+</h2>
            <p className="leading-relaxed text-rose-300">Years of Experience</p>
          </div>
          <div className="p-4">
            <FaAward className="text-yellow-500 w-12 h-12 mb-1 inline-block"/>
            <h2 className="title-font font-medium text-3xl text-rose-300">2021</h2>
            <p className="leading-relaxed text-rose-300">Education Completion Year</p>
          </div>
          <div className="p-4">
            <FaSmileBeam className="text-yellow-500 w-12 h-12 mb-1 inline-block"/>
            <h2 className="title-font font-medium text-3xl text-rose-300">2020</h2>
            <p className="leading-relaxed text-rose-300">Japan Habba event</p>
          </div>
        </div>
      </div>
    </section>
    <Skills />
    </>
  );
}
