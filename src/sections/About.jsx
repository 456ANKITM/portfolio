import { Code2, Lightbulb, Rocket, Users } from 'lucide-react'
import React from 'react'

const About = () => {
  const highLights = [
    {
      icon: Code2,
      title: "Clean Code",
      "description": "Writing Maintainable, Scalable code that stands the test of time"
    },
    {
      icon: Rocket,
      title: "Performance",
      "description": "Optimizing for speed and delivering lightning-fast user experiences"
    },
    {
      icon: Users,
      title: "Collaboration",
      "description": "Working closely with teams to bring ideas to life"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      "description": "Staying ahead with latest technologies and best practices."
    }
  ]
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center '>
          {/* Left column  */}
          <div className='space-y-8'>
            <div className='animate-fade-in'> 
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase ">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100  text-secondary-foreground">
            Building the future,
            <span className='font-serif italic font-normal text-white'> One Component at a time.</span>

          </h2>
          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 ">
            <p>
              I’m a passionate MERN Stack developer with a strong focus on building modern, scalable, and user-friendly web applications. I specialize in working with MongoDB, Express.js, React, and Node.js to create full-stack solutions that are both efficient and visually engaging. I enjoy turning complex problems into simple, elegant interfaces while ensuring performance and responsiveness across devices.
            </p>
            <p>
              Over time, I’ve developed experience in designing RESTful APIs, managing state in React applications, and integrating authentication and real-time features. I pay close attention to clean code practices, reusable components, and smooth user experiences. Whether it’s developing a dynamic frontend or handling backend logic, I strive to write code that is maintainable and production-ready.
            </p>
            <p>
              I’m constantly learning and exploring new technologies to stay updated in the fast-evolving world of web development. I enjoy building personal projects, experimenting with creative UI designs, and improving my problem-solving skills. My goal is to grow as a developer while contributing to impactful projects that make a difference.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-300">
            <p className='text-lg font-medium italic text-foreground'>"My mission is to craft high-quality, scalable web applications that combine clean architecture with intuitive user experiences, while continuously learning and leveraging modern technologies to solve real-world problems and deliver meaningful digital solutions."</p>
          </div>
        </div>
        {/* Right Column - highlight  */}
        <div className='grid sm:grid-cols-2 gap-6 '>
          {highLights.map((item, index)=>(
            <div key={index} className='glass p-6 rounded-2xl animate-fade-in' 
            style={{animationDelay:`${(index + 1) * 100}ms`}}>
              <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 '>
                <item.icon className='w-6 h-6 text-primary' />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className='text-sm  text-muted-foreground'>{item.description}</p>
               </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default About
