'use client'

import { FaDatabase, FaUniversity, FaPython, FaHtml5, FaCss3, FaReact, FaGitAlt, FaGithub, FaJira, FaJenkins } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiTailwindcss, SiBootstrap, SiJquery, SiMysql, SiMongodb, SiFirebase, SiPostman, SiOracle, SiCivicrm } from 'react-icons/si';
// ... import other icons as needed
import { BsFiletypeSql } from "react-icons/bs";
import { GoWorkflow } from "react-icons/go";
import { TbBrandVscode } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";





export default function Skills() {
    return (
        <>
            <section className=" text-white-700 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-rose-500">
                            Skills
                        </h1>
                        <p className="mb-8 leading-relaxed text-yellow-300">
                            Skills I have learned so far, still learning new things.
                        </p>
                        <div className="flex flex-wrap justify-center ">
                            {/* JavaScript */}
                            <div className="p-4">
                                <SiJavascript className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">JavaScript</p>
                            </div>
                            {/* Python */}
                            <div className="p-4">
                                <FaPython className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">Python</p>
                            </div>
                            {/* HTML5 */}
                            <div className="p-4">
                                <FaHtml5 className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">HTML5</p>
                            </div>
                            {/* CSS3 */}
                            <div className="p-4">
                                <FaCss3 className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">CSS3</p>
                            </div>
                            {/* React.js */}
                            <div className="p-4">
                                <FaReact className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">React.js</p>
                            </div>
                            {/* Redux */}
                            <div className="p-4">
                                <RiNextjsFill className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">Next.js</p>
                            </div>
                            {/* Tailwind CSS */}
                            <div className="p-4">
                                <SiTailwindcss className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">Tailwind CSS</p>
                            </div>
                            {/* Bootstrap */}
                            <div className="p-4">
                                <SiBootstrap className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">Bootstrap</p>
                            </div>
                            {/* jQuery */}
                            <div className="p-4">
                                <SiJquery className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">jQuery</p>
                            </div>
                            {/* Git */}
                            <div className="p-4">
                                <FaGitAlt className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">Git</p>
                            </div>
                            {/* GitHub */}
                            <div className="p-4">
                                <FaGithub className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">GitHub</p>
                            </div>
                            <div className="p-4">
                                <TbBrandVscode className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">VS Code</p>
                            </div>
                            {/* Jira */}
                            <div className="p-4">
                                <FaJira className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">Jira</p>
                            </div>
                            {/* Jenkins */}
                            <div className="p-4">
                                <FaJenkins className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">Jenkins</p>
                            </div> 
                            <div className="p-4">
                                <SiPostman className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">Postman</p>
                            </div> 
                            <div className="p-4">
                                <FaDatabase className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">DataBase</p>
                            </div>
                            <div className="p-4">
                                <SiMysql className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">MySQL</p>
                            </div>
                            <div className="p-4">
                                <SiMongodb className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">MongoDB</p>
                            </div>
                            <div className="p-4">
                                <SiFirebase className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">Firebase</p>
                            </div>
                            <div className="p-4">
                                <BsFiletypeSql className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">SQL</p>SiOracle 
                            </div> 
                            <div className="p-4">
                                <SiOracle className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">Oracle Siebel</p> 
                            </div> 
                            <div className="p-4">
                                <SiCivicrm className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">CRM</p> 
                            </div>
                            <div className="p-4">
                                <GoWorkflow className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p className="leading-relaxed">Workflow</p> 
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
            <br />
            {/* Education part */}
            <section className=" text-white-700 body-font">
                <div className="container mx-auto flex px-5 py-0 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-rose-500">
                            Educations
                        </h1>
                        <p className="mb-1 leading-relaxed text-yellow-300">
                            <strong>BMS Institute of Technology and Management</strong>
                        </p>
                        <div className="flex flex-wrap justify-center ">
                            {/* JavaScript */}
                            <div className="p-4">
                                <FaUniversity className="text-yellow-500 w-12 h-12 mb-1 inline-block" />
                                <p>Bachelor of Engineering (B.E.), Electronics & Communication Engineering</p>
                                <p className='p-4'>Bengaluru, Karnataka</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
