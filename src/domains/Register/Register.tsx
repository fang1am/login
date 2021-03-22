import React, { useState } from "react";
import {
  Form,
  Button,
  Input,
  Space,
  Divider,
  message,
  Select,
  Row,
  Col,
  Dropdown,
  Menu,
} from "antd";
import "antd/dist/antd.css";
import { provinceData, countryData } from "./data";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 10,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="66">+66</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);
interface ProvinceData {
  name: string;
  code: number;
}

const DomainsRegister: React.FC = () => {
  const [form] = Form.useForm();
  const [province, setProvince] = useState(provinceData[0]);
  const [country, setCountry] = useState(countryData[0]);

  const handleProvinceChange = (e: any) => {};

  //   const handleCountryChange = (value: any) => {
  //     setProvince(countryData[value]);
  //   };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      initialValues={{
        prefix: "66",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        label="Username/ชื่อผู้ใช้งาน"
        rules={[
          {
            required: true,
            message: "Please input your username",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail/อีเมลล์"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password/รหัสผ่าน"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback //icon กากบาทสีแดง
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password/ยืนยันรหัสผ่าน"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve(); //จะเอาไว้สั่งงาน เนื่องจากทำงานสำเร็จ
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
              //reject จะเอาไว้ใช้ในกรณีที่ การทำงานไม่สำเร็จ
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="firstname"
        label="Firstname/ชื่อ"
        rules={[
          {
            required: true,
            message: "Please input your firstname",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastname"
        label="Lastname/นามสกุล"
        rules={[
          {
            required: true,
            message: "Please input your lastname",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="address" label="Address/ที่อยู่">
        <Input />
      </Form.Item>
      <Form.Item name="province" label="Province/จังหวัด">
        <Select
          defaultValue={provinceData[0].name}
          style={{ width: 120 }}
          onChange={handleProvinceChange}
        >
          {provinceData.map((province) => (
            <Option value={province.code}>{province.name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="country" label="Country/ประเทศ">
        <Select
          defaultValue={countryData[0].name}
          style={{ width: 120 }}
          //   onChange={handleCountryChange}
        >
          {countryData.map((country) => (
            <Option value={country.code}>{country.name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number/เบอร์โทร"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
//fc คือฟังกฺชั่นคอมโพแนน
export default DomainsRegister;
