import {
  GithubOutlined,
  HeartTwoTone,
  LinkedinOutlined,
  MailTwoTone,
  ProjectTwoTone,
  PushpinTwoTone,
  StarTwoTone,
  TrophyTwoTone,
} from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";

export default function Contact() {
  const contacts = [
    {
      name: "Email",
      body: "yohanaesimanungkalit@gmail.com",
      icon: <MailTwoTone style={{fontSize:"21px"}}/>,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      link: "mailto:yohanaesimanungkalit@gmail.com",
    },
    {
      name: "Location",
      body: "Jakarta, Indonesia",
      icon: <PushpinTwoTone style={{fontSize:"21px"}}/>,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      link: null,
    },
  ];

  const socials = [
    {
      icon: <GithubOutlined/>,
      link: "https://github.com/yourusername",
      color: "hover:bg-gray-900",
      label: "GitHub",
    },
    {
      icon: <LinkedinOutlined/>,
      link: "www.linkedin.com/in/27yohanasimanungkalit",
      color: "hover:bg-blue-600",
      label: "LinkedIn",
    },
  ];

  return (
    <section id="contacts" className="min-h-screen py-14 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Get in touch and
            let's create something amazing together.
          </p>
        </div>

        {/* Contact Cards */}
        <Row gutter={[24, 24]} className="mb-10">
          {contacts.map((item, key) => (
            <Col xs={24} sm={12} key={key}>
              <Card
                className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 hover:border-purple-500/50 group cursor-pointer"
                onClick={() => item.link && window.open(item.link, "_self")}
              >
                <div className="flex flex-col items-center text-center py-2">
                  {/* Icon */}
                  <div
                    className={`mb-4 w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                  >
                    <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.icon}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2 uppercase tracking-wider text-sm">
                    {item.name}
                  </h3>

                  {/* Contact Info */}
                  <p className="text-xl font-bold text-foreground group-hover:text-purple-600 transition-colors">
                    {item.body}
                  </p>

                  {/* Decorative Border */}
                  <div
                    className={`mt-2 h-1 w-0 bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-300 group-hover:w-full`}
                  />
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6 text-lg font-medium">
            Connect with me
          </p>
          <div className="flex justify-center gap-6">
            {socials.map((social, key) => (
              <Button
                key={key}
                type="default"
                size="large"
                icon={social.icon}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-16 h-16 flex items-center justify-center rounded-xl border-2 transition-all duration-300 hover:scale-110 hover:shadow-xl ${social.color} hover:text-white hover:border-transparent group`}
                aria-label={social.label}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="inline-flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
            <p className="text-lg text-foreground mb-4">
              Ready to start a conversation?
            </p>
            <Button
              type="primary"
              size="large"
              href="mailto:yohanaesimanungkalit@gmail.com"
              className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 h-12 px-8 text-base font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Send me an email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}