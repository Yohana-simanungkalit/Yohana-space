import {Button, Col, Row} from "antd";
import BackgroundImage from "./../../assets/finalImage.jpeg";
import {LinkedinFilled, LinkedinOutlined, MailFilled} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import ThemeSwitch from "../ThemeSwitch";

export default function Hero(props:any) {

  const navigate = useNavigate()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image */}
      <div
        className="absolute inset-3 md:inset-8 bg-cover bg-center opacity-55"
        style={{backgroundImage: `url(${BackgroundImage})`}}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-serif text-3xl md:text-7xl lg:text-8xl text-primary-foreground mt-30">
            Creative
            <br />Software Engineer|
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80  mb-5 max-w-2xl mx-auto">
            Crafting beautiful digital experiences with modern web technologies
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Button size="large" type="primary" onClick={props.scrollToAbout}>
            View My Experiences
          </Button>
          <Button size="large" type="primary" onClick={props.scrollToContact}>
            Get In Touch
          </Button>
          {/* <Button size="large" type="primary" onClick={() => navigate(ROUTES.FORM)}>
            Form
          </Button> */}
        </div>
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-950 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2" />
          </div>
        </div> */}
        {/* <div>
          <ThemeSwitch/>
        </div> */}
      </div>
    </section>
  );
}
