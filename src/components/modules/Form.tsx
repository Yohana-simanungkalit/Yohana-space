import { Card, Col, Row, Input, Button } from "antd";
import { Form as FormLogin } from "antd";
import ThemeSwitch from "../ThemeSwitch";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from "react-router-dom";
export default function Form() {
    const {theme} = useContext(ThemeContext);
    // {} untuk mereferensikan item ke objek, jika tidak pakai {} maka hasilnya akan berupa object
    const[formLogin] = FormLogin.useForm();
    const navigate = useNavigate();

    const onFinish = () => {
        const data = {...formLogin.getFieldsValue()}
        console.log("value", data);
        if(data){
            localStorage.setItem("token", "12345ABCDE")
        }

        callDashboard();
        formLogin.resetFields();
    };

    const callDashboard = () => {
        if(localStorage.getItem("token")){
         navigate(ROUTES.DASHBOARD);
        }
    }

    return (
        <div className={`container ${theme}`}>
        <Row justify="end"> 
            <Col span={8}>
                <ThemeSwitch/>
            </Col>
        </Row>
        <Row justify="center">
        <Col span={8}>
            <Card title="Login" size="default" className={`login-card ${theme}`}>
                <FormLogin form={formLogin} onFinish={onFinish}>
                    <FormLogin.Item label="Username" name="username" rules={[{required:true, message:"Please input your username"}]}>
                        <Input/>
                    </FormLogin.Item>
                    <FormLogin.Item label="Password" name="password" rules={[{required:true, message:"Please input your password"}]}>
                        <Input.Password/>
                    </FormLogin.Item>
                    <FormLogin.Item label={null}>
                        <Button type="primary" htmlType="submit">Login</Button>
                    </FormLogin.Item>
                </FormLogin>
            </Card>
        </Col>
        </Row>
        </div>
    )
};