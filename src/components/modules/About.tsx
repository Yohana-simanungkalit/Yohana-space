import {
  AppstoreOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CodeOutlined,
  DoubleLeftOutlined,
  RocketOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      year: "2025",
      role: "Software Engineer",
      company: "PT. Bank Mandiri",
      duration: "OBDS (Old Branch Delivery System)",
      description:
        "Contributed as a Software Engineer since August for OBDS development using VB6; focused on delivering high-speed clean code to fulfill Bank Mandiri’s customer transactional needs.",
      icon: <RocketOutlined style={{ fontSize: "36px" }} />,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2023 - 2024",
      role: "Software Engineer",
      company: "PT. Bank Mandiri",
      duration: "HYVE Project II",
      description:
        "Developed Project HYVE (RM Tools) using React JS with a focus on responsive design, speed, and clean code to meet specific business requirements.",
      icon: <CodeOutlined style={{ fontSize: "36px" }} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "October 2022",
      role: "Software Engineer",
      company: "PT. Bank Mandiri",
      duration: "HYVE Project I",
      description:
        "Created responsive and interactive user interfaces using React JS for a bank's internal RM (Relationship Manager) tools.",
      icon: <AppstoreOutlined style={{ fontSize: "36px" }} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      year: "October 2022",
      role: "Graduation",
      company: "Del Institute of Technology",
      description:
        "Completed a Diploma in Information Technology and started my professional career right after graduating.",
      icon: <TrophyOutlined style={{ fontSize: "36px" }} />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const scrollToIndex = (index: number) => {
    setActiveIndex(index);
    const element = document.getElementById(`exp-${index}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < experiences.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  return (
    <section id="about" className="min-h-screen py-14 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Experience Timeline Section */}
          <div>
           <h1 className="font-serif font-bold">Work Experience</h1>
            <div className="relative mt-10">
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mb-8 px-4">
                <button
                  onClick={handlePrevious}
                  disabled={activeIndex === 0}
                  className="rounded-full bg-card border border-border hover:bg-accent hover:border-purple-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                >
                  <ArrowLeftOutlined style={{color:"white"}} />
                </button>

                <div className="flex space-x-3">
                  {experiences.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToIndex(idx)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        idx === activeIndex
                          ? "bg-purple-500 w-5 shadow-lg shadow-purple-500/50"
                          : "bg-muted-foreground/20 w-12 hover:bg-muted-foreground/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={activeIndex === experiences.length - 1}
                  className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-purple-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                >
                  <ArrowRightOutlined style={{color:"white"}} />
                </button>
              </div>

              {/* Horizontal Timeline */}
              <div className="relative overflow-x-auto pb-8 pt-5 hide-scrollbar">
                <div className="flex items-center min-w-max px-4">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="flex items-center">
                      {/* Experience Card */}
                      <div
                        id={`exp-${idx}`}
                        className={`flex flex-col items-center transition-all duration-500 ${
                          idx === activeIndex
                            ? "scale-100 opacity-100"
                            : "scale-90 opacity-50 blur-[1px]"
                        }`}
                      >
                        {/* Year Badge */}
                        <div className="mb-4">
                          <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-sm font-semibold backdrop-blur-sm shadow-lg">
                            {exp.year}
                          </span>
                        </div>

                        {/* Icon Circle */}
                        <div
                          className={`relative mb-6 w-24 h-24 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-2xl z-10 transition-transform duration-300 ${
                            idx === activeIndex ? "scale-110" : ""
                          }`}
                        >
                          <div className="text-white">{exp.icon}</div>

                          {/* Pulse Animation */}
                          {idx === activeIndex && (
                            <>
                              <div
                                className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} animate-ping opacity-75`}
                              />
                              <div
                                className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} animate-pulse opacity-50`}
                              />
                            </>
                          )}
                        </div>

                        {/* Card Content */}
                        <div
                          className={`w-80 md:w-96 bg-card/80 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 shadow-xl ${
                            idx === activeIndex
                              ? "border-purple-500/50 shadow-2xl shadow-purple-500/20 transform translate-y-0"
                              : "border-border shadow-lg translate-y-2"
                          }`}
                        >
                          <h3 className="text-2xl font-bold mb-2 text-foreground">
                            {exp.role}
                          </h3>
                          <p
                            className={`text-lg font-semibold mb-1 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                          >
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground mb-4 font-medium">
                            {exp.duration}
                          </p>
                          <p className="text-foreground/80 mb-6 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>

                      {/* Connector Line */}
                      {idx < experiences.length - 1 && (
                        <div className="flex items-center mx-6">
                          <div className="relative w-32 md:w-40 h-1 rounded-full overflow-hidden">
                            {/* Base line */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30" />
                            {/* Animated line */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-r ${
                                idx < activeIndex
                                  ? "from-purple-500 to-pink-500"
                                  : "from-purple-500/50 to-pink-500/50"
                              } transition-all duration-500`}
                              style={{
                                width: idx < activeIndex ? "100%" : "0%",
                              }}
                            />
                            {/* Moving dot */}
                            {idx === activeIndex && (
                              <div
                                className="absolute top-1/2 left-0 w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-500/50"
                                style={{
                                  transform: "translate(-50%, -50%)",
                                  animation: "moveDot 2s ease-in-out infinite",
                                }}
                              />
                            )}
                          </div>
                          <div className="w-0 h-0 border-l-[12px] border-l-purple-500/50 border-y-[8px] border-y-transparent" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes moveDot {
          0%, 100% {
            left: 0%;
          }
          50% {
            left: 100%;
          }
        }
      `}</style>
    </section>
  );
}