import {
  HeartTwoTone,
  ProjectTwoTone,
  StarTwoTone,
  TrophyTwoTone,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";

export default function Skill() {
  const mySkills = [
    {
      icon: <TrophyTwoTone twoToneColor="#8b5cf6" style={{ fontSize: "28px" }} />,
      title: "Frontend Development",
      description: "Javascript, React, TypeScript, CSS",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: <HeartTwoTone twoToneColor="#10b981" style={{ fontSize: "28px" }} />,
      title: "Performance",
      description: "Optimization, SEO, Web Vitals, Accessibility",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: <ProjectTwoTone twoToneColor="#3b82f6" style={{ fontSize: "28px" }} />,
      title: "Design",
      description: "UI/UX Design, Figma, Responsive Design",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: <StarTwoTone twoToneColor="#f59e0b" style={{ fontSize: "28px" }} />,
      title: "Modern Tools",
      description: "Git, CI/CD, Testing, Design Systems",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-14 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Skills &{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A diverse set of skills and technologies that I use to bring ideas
              to life
            </p>
          </div>

          {/* Skills Grid */}
          <Row gutter={[24, 24]} className="mt-10">
            {mySkills.map((item, key) => (
              <Col xs={24} sm={12} lg={6} key={key}>
                <Card
                  className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 hover:border-purple-500/50 group cursor-pointer"
                  title={
                    <div className="flex flex-col items-center pt-5">
                      {/* Icon Container */}
                      <div
                        className={`mb-4 w-20 h-20 rounded-2xl ${item.bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                      >
                        {item.icon}
                      </div>
                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground text-center">
                        {item.title}
                      </h3>
                    </div>
                  }
                  bordered={false}
                >
                  {/* Description */}
                  <div className="text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative Bottom Border */}
                  <div
                    className={`mt-6 h-1 bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100`}
                  />
                </Card>
              </Col>
            ))}
          </Row>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-card border-2 border-border rounded-full hover:border-purple-500/50 transition-all duration-300">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Always learning</span> and exploring new technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}