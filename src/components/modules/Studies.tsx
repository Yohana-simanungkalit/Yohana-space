import { TrophyOutlined } from "@ant-design/icons"
import { Card, Col, Row } from "antd"

export default function Studies(props: any) {

    const studiesList = [
        {
            year: "May 2026",
            title: "Information System (S1)",
            university: "BINUS(Bina Nusantara University)",
            ipk: "3.81",
            bgColor: "bg-red-50",
            gradient: "from-purple-500 to-pink-500",
            icon: <TrophyOutlined style={{ fontSize: "30px" }} />,
        },
        {
            year: "Oct 2022",
            title: "Information Technology (D3)",
            university: "IT Del(Del Institute of Technology)",
            ipk: "3.2",
            gradient: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50",
            icon: <TrophyOutlined style={{ fontSize: "30px" }} />,
        },
    ]

    return (
        <section id="studies" className="min-h-screen py-2 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-15">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-25">
                        <span className="font-serif font-bold text-5xl md:text-5xl text-foreground">
                            Educations
                        </span>
                        <div className="mt-5">
                            <span className="font-serif text-xl md:text-2xl text-foreground">
                                Passionate about exploring new technologies, improving software engineering skills, and staying up to date with the latest trends.
                            </span>
                        </div>
                        <div className="mt-4">
                            <span className="font-serif font-bold text-xl md:text-2xl bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent text-foreground">
                                "Never stop learning, because life never stops teaching."
                            </span>
                        </div>
                    </div>

                    {/* Skill Grid */}
                    <Row gutter={[24, 24]}>
                        {studiesList.map((item, key) => (
                            <Col xs={24} sm={24} lg={12} key={key}>
                                <Card
                                    className="h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 hover:border-purple-500/50 group cursor-pointer"
                                    title={
                                        <div className="flex flex-col items-center pt-5">
                                            {/* Icon Container */}
                                            <div
                                                className={`mb-4 w-18 h-17 rounded-2xl ${item.bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                                            >
                                                {item.icon}
                                            </div>
                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-foreground text-center">
                                                {item.year}
                                            </h3>
                                        </div>
                                    }
                                >
                                    {/* Description */}
                                    <div className="text-center">
                                        <p className="text-xl sm:text-xl font-bold  text-muted-foreground leading-relaxed">
                                            {item.university}
                                        </p>
                                        <p className="text-2xl sm:text-xl  text-muted-foreground leading-relaxed">
                                            {item.title}
                                        </p>
                                        <p className="text-2xl sm:text-xl  text-muted-foreground leading-relaxed">
                                            GPA {item.ipk}
                                        </p>
                                    </div>

                                    {/* Decorative Bottom Border */}
                                    <div
                                        className={`mt-4 h-1 bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-300 scale-x-0 group-hover:scale-x-100`}
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </section>
    )
}