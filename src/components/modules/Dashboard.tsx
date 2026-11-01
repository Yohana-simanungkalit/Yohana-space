import { DesktopOutlined, FileOutlined, PieChartFilled, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

function getItem(label:any, key:any, icon?:any, children?:any) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);
    const currentYear = new Date().getFullYear();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
            </Sider>
            <Layout>
                {/* Untuk Header */}
                <Header />
                {/* Untuk Content */}
                <Content>
                    <Breadcrumb items={[{ title: "Test1" }, { title: "Test2" }, { title: "Test2" }]} />
                    <div style={{ padding: 24, minHeight: 360 }}>
                        Bill is a cat
                    </div>
                </Content>
                {/* Untuk Footer */}
                <Footer>
                    Ant Design ©{currentYear} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}