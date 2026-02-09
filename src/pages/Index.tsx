import { useRef } from "react";
import About from "../components/modules/About";
import Contact from "../components/modules/Contact";
import Hero from "../components/modules/Hero";
import Skill from "../components/modules/Skill";

export default function Index(){
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref:any) => {
     ref.current?.scrollIntoView({ behavior: "smooth" })
  };

  return(
    <div className="min-h-screen">
      <Hero
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToContact={() => scrollTo(contactRef)}
      />
      <About ref={aboutRef}/>
      <Skill/>
      <Contact ref={contactRef}/>
    </div>
  )
}