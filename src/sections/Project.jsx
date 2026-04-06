import { ArrowUpRight, GitBranch } from 'lucide-react'
import React from 'react'
import AnimatedBorderButton from '../components/AnimatedBorderButton'

const Project = () => {
  const projects = [
    {
      title: "E-commerce Clothing" ,
      description:"A modern online clothing store offering a seamless shopping experience with stylish collections.Browse, select, and shop effortlessly with a fast, secure, and user-friendly interface.",
      image:"/projects/project2.png",
      tags: ["React", "Node JS", "Express", "MongoDB", "Payment Gateway", "Cloudinary"],
      link: "https://e-commerce-clothing-frontend.vercel.app/",
      github:" https://github.com/456ANKITM/E-commerce-Clothing",
    },
    {
      title: "Online Library" ,
      description:"A digital library platform that provides easy access to a wide range of books and resources.Explore, read, and manage your collection anytime with a smooth and intuitive experience.",
      image:"/projects/project3.png",
      tags: ["React", "Node JS", "Express", "MongoDB", "Cloudinary"],
      link: "https://e-library-phi-jet.vercel.app/",
      github:"https://github.com/456ANKITM/E-library",
    },
    {
      title: "Car Rental" ,
      description:"A convenient car rental platform designed for quick and hassle-free bookings.Find, compare, and reserve vehicles بسهولة with a simple and efficient user interface.",
      image:"/projects/project4.png",
      tags: ["React", "Node JS", "Express", "MongoDB",],
      link: "https://car-rental-git-main-ankit-mishras-projects-e4c95bbd.vercel.app/",
      github:"https://github.com/456ANKITM/car-rental-publisher-app",
    },
  ]
  return (
    <section id="projects" className='py-32 relative overflow-hidden'>
      {/* Background  glows  */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header  */}
        <div className='text-center mx-auto max-w-3xl mb-16  '>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in '>Featured Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground'>Projects that
            <span className='font-serif italic font-normal text-white'> make an impact</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animate-delay-200 '>
            A section of my recent work, from complex web applications to innovative tool that solved real-problems.
          </p>
        </div>
        {/* Projects grid  */}
        <div className='grid md:grid-cols-2 gap-8 '>
            {projects.map((project, index)=>(
              <div key={index} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 '   
              style={{animationDelay:`${(index + 1) * 100}ms`}}> 
              {/* Image  */}
              <div className='relative overflow-hidden aspect-video'>
                 <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' />
                 <div className='absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60' />
                 {/* OverLay Link  */}
                 <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <ArrowUpRight className='w-5 h-5' />
                  </a>
                  <a href={project.github} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <GitBranch className='w-5 h-5'   />
                  </a>
                 </div>
              </div>
              {/* Content  */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                  <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all' />
                </div>
                <p className='text-muted-foreground text-sm '>{project.description}</p>
                <div className='flex flex-wrap gap-2 '>
                  {project.tags.map((tag, tagIndex)=>(
                    <span className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 ' key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
               </div>
            ))}
        </div>
        {/* View All CTA  */}
        <div className='text-center mt-12 animate-fade-in animate-delay-500'>
          <AnimatedBorderButton> 
            View All projects 
            <ArrowUpRight className='w-5 h-5' />
          </AnimatedBorderButton>
        </div>
      </div>
      
    </section>
  )
}

export default Project
