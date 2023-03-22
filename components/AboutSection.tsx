import React from 'react'
import Image from 'next/image'

const skills =[
    { skill: "Windows server" },
    { skill: "Linux server" },
    { skill: "Jenkins" },
    { skill: "Docker" },
    { skill: "Kubernetes" },
    { skill: "GCP" },
    { skill: "Azure" },
    { skill: "AWS" },
    { skill: "Github Actions" },
    { skill: "Microsoft Power Platform" },
    { skill: "UIPath" },
    { skill: "React" },
    { skill: ".Net" },
    
]

const AboutSection = () => {
  return (
    <section id="about">
        <div className="my-12 pb-12 md:pt-16 md:pb-40">
            <h1 className="text-center font-bold text-4xl">
                Sobre mi
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"/>
            </h1>
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                <div className="md:w-1/2">
                    <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                        ¡Conoce mas sobre mi!
                    </h1>
                    <p>{" "}
                        Hola, Mi nombre es Henry Monroy y soy un{" "}
                        <span className="font-bold">{"Intuitivo"}</span>,
                        <span className="font-bold">{" Explorador"}</span>, y
                        <span className="font-bold">{" Automotivado"}</span> consultor IT. 
                    </p>
                    <br />
                    <p>
                        Toda mi vida laboral he trabajado en el area de tecnologia.
                        Cuento con experiencia en el area tecnologica SysAdmin/SysOps, desarrollo y HelpDesk.
                        Me gradue de Licenciado en Computacion en la Universidad Nueva Esparta en Caracas, Venezuela en el 2019.
                    </p>
                    <br />
                    <p>
                        Tengo un basto rango de intereses que me mantienen activo. Desde la lectura, entrenamiento fisico hasta
                        competir en torneos de deportes electronicos.
                        Estoy siempre buscando nuevas experiencias y el interes para mantenerme comprometido y aprender cosas nuevas
                    </p>
                    <br />
                    <p>
                        Creo que nunca{" "}
                        <span className="font-bold text-teal-500">
                            se debe dejar de aprender
                        </span>{" "}
                        y eso es lo que me he comprometido a hacer. Tengo pasion por la tecnologia y siempre deseo traspasar los limites
                        de lo posible. Me emociona ver a donde me dirige este camino y siempre estar dispuesto a nuevas oportunidades.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                        Mis habilidades
                        </h1>
                    <div className="flex flex-wrap justify-center md:justify-start">
                        {skills.map((item, idx) => {
                            return <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded fon">{item.skill}</p>
                        })}
                    </div>
                    <Image className="hidden md:block md:relative md:bottom-0 md:left-20 md:z-0" src="/7127986.jpg" alt="" width={325} height={325} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection