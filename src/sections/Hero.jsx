import React from "react";
import Button from "../components/Button";
import {
  ArrowBigRight,
  ArrowDown,
  ArrowRight,
  ChevronDown,
  Download,
  GitBranch,
} from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const Hero = () => {
  const skills = [
    "Node JS",
    "Express",
    "MongoDB Atlas",
    "React",
    "Next JS",
    "Javascript",
    "Redux",
    "Cloudinary",
    "Vercel",
    "Git",
    "Git hub"
  ]
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero-background"
          className="w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-background/20
         via-background/80 to-background "
        />
      </div>
      {/* Green dots  */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* content  */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          {/* Left column - text content  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                {" "}
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full Stack Developer - MERN
              </span>
            </div>

            {/* Headline  */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white"></span>
                precision.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                Hi, I'm Ankit Mishra - a full stack Developer specializing in
                Node JS, Express, MongoDB and React.
              </p>
            </div>
            {/* CTAs  */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact me <ArrowRight className="w-5 h-5" />{" "}
              </Button>
              <AnimatedBorderButton>
                 <Download className="w-5 h-5" /> Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links  */}
            <div className="flex  items-center gap-4 animate-fade-in animate-delay-400">
                 
                 
              <span className="text-sm text-muted-foreground"> Follow Me:  </span>
                {[
                  { icon: GitBranch, href: "https://github.com/456ANKITM" },
                  {
                    icon: GitBranch,
                    href: "https://www.linkedin.com/in/ankit-mishra-8537433aa/",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
             
            </div>
          </div>
          {/* Right Column - Profile Image  */}
          <div className="relative animate-fade-in animate-delay-300">
            {/* Profile image  */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/profile-photo.jpg" alt="Ankit Mishra" 
                className="w-full aspect-[4/5] object-cover rounded-2xl " />
                {/* Floating Badge  */}
                 <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                 </div>
                {/* Stats Badge  */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animate-delay-500">
                  <div className="text-2xl font-bold text-primary ">5+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section  */}
        <div className="mt-20 animate-fade-in animation-delay-600 ">
          <p className="text-sm text-muted-foreground mb-6 text-center">Tech Stack</p>
          <div className="relative overflow-hidden ">
            <div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="flex-shrink-0 px-8 py-4 "> 
              <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors ">{skill}</span> 
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-800">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"></a>
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
