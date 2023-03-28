import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRight, BsArrowBarUp, BsArrowUpRightSquare } from "react-icons/bs"
import { icons } from 'react-icons/lib'
import SlideUp from './SlideUp'

const projects = [
  {name: "Full Stack E-commerce App",
  description: "Our e-commerce application will include modern design and animations, the ability to add and edit products on the go using a Sanity, all advanced cart, and checkout functionalities.",
  image: "/phanox.png",
  github: "https://github.com/GguasarapoO/ecommerce_sanity_stripe",
  link: "https://phanox.vercel.app/",
  },
  {name: "Fitness App",
  description: "Full Exercises database With the functionality to choose exercise categories and specific muscle groups, browse more than one thousand exercises with practical examples, pagination, exercise details, pull related videos from youtube, display similar exercises",
  image: "/ExercisesDB.png",
  github: "https://github.com/GguasarapoO/project_fitness_app",
  link: "https://exercisesdb.netlify.app/",
  },
  {name: "Amazon Web Scraper",
  description: "Web Scraper enfocado en Amazon crado con React, Firebse y Brightdata",
  image: "/scrape.png",
  github: "",
  link: "",

  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
      Proyectos
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"/>
            </h1>
      
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
            <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
              <div className="mt-8 md:w-1/2">
                <Link href={project.link} target="_blank">
                  <Image
                  src={project.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="rounded-xl shadow-xl hover:opacity-70"/>
                  </Link>
              </div>
            <div className="mt-12 md:w-1/2">
              <h1 className="text-4xl font-bold mb:6">
                {project.name}
                </h1>
              <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                {project.description}
                </p>
                <div className='flex flex-row align-bottom space-x-4'>
                  <Link href={project.github} target="_blank">
                    < BsGithub size={30} className="hover:translate-y-1 transition-transform cursor-pointer"/>
                  </Link>
                  <Link href={project.link} target="_blank">
                  < BsArrowUpRightSquare size={30} className="hover:translate-y-1 transition-transform cursor-pointer"/>
                  </Link>
                </div>
            </div>
            </div>
            </SlideUp>
          </div>
        })}
      </div>
      </section>
  )
}

export default ProjectsSection