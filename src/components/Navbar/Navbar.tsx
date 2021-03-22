import React from "react";
import { Space, Typography, Divider } from "antd";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Space split={<Divider type="vertical"></Divider>}>
      <Link to="/" component={Typography.Link}>
        HomePage
      </Link>
      <Link to="/about" component={Typography.Link}>
        About
      </Link>
      <Link to="/login" component={Typography.Link}>
        Login
      </Link>
      <Link to="/register" component={Typography.Link}>
        Register
      </Link>
    </Space>
  );
};
export default Navbar;
