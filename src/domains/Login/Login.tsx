import React from "react";
import { Form, Button, Input, Space, Divider, message } from "antd";
import { LoginFormSubmitValues } from "../../types/domains/Login";
import { requestAuthLogin } from "../../hooks/auth";

const DomainsLogin: React.FC = () => {
  const [formLogin] = Form.useForm();
  const handleSubmitForm = async (values: LoginFormSubmitValues) => {
    try {
      const { username, password } = values;
      const data = await requestAuthLogin(username, password);
      console.log("data :>> ", data);
      message.success("Login Successful");
    } catch (error) {
      console.error(error);
      const code = error.code ?? "";
      message.error(`${error.message} ${code ? `(${code})` : ""}`);
    }
  };
  return (
    <Form
      form={formLogin}
      name="formLogin"
      layout="vertical"
      onFinish={handleSubmitForm}
      onReset={() => formLogin.resetFields()}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Pls enter your username",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Pls enter your password",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Divider></Divider>
        <Space>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
          <Button htmlType="reset">Reset Form</Button>
          <Button
            onClick={() =>
              formLogin.setFieldsValue({
                username: "Fang",
                password: "1234",
              })
            }
          >
            {" "}
            Auto Fill Data
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
//fc คือฟังก์ชั่นคอมโพแนน
export default DomainsLogin;
