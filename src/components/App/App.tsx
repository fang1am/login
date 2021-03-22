import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import DomainsHome from "../../domains/Home";
import DomainsAbout from "../../domains/About";
import DomainSLogin from "../../domains/Login";
import Navbar from "../Navbar";
import { Layout } from "antd";
import DomainsRegister from "../../domains/Register";

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <BrowserRouter>
      <Header>
        <Navbar></Navbar>
      </Header>
      <Content className="content-app">
        <Switch>
          <Route exact path="/" component={DomainsHome}></Route>
          <Route exact path="/about" component={DomainsAbout}></Route>
          <Route exact path="/login" component={DomainSLogin}></Route>
          <Route exact path="/register" component={DomainsRegister}></Route>
        </Switch>
      </Content>

      <Footer style={{ textAlign: "center" }}>Footer is here!</Footer>
    </BrowserRouter>
  );
}

export default App;
