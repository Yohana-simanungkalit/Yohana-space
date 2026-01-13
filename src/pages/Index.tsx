import About from "../components/modules/About";
import Contact from "../components/modules/Contact";
import Hero from "../components/modules/Hero";
import Skill from "../components/modules/Skill";

export default function Index(){
  return(
    <div className="min-h-screen">
      <Hero/>
      <About/>
      <Skill/>
      <Contact/>
    </div>
  )
}