import {Button, Col, Row} from "antd";
import BackgroundImage from "./../../assets/gambar2.jpeg";
import {LinkedinFilled, LinkedinOutlined, MailFilled} from "@ant-design/icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{backgroundImage: `url(${BackgroundImage})`}}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-30 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-15">
            Creative
            <br />Software Engineer
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80  mb-5 max-w-2xl mx-auto">
            Crafting beautiful digital experiences with modern web technologies
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Button size="large" type="primary">
            View My Project
          </Button>
          <Button size="large" type="primary">
            Get In Touch
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-950 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
