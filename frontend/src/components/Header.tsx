import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[]}
          style={{ float: "right" }}
        >
          <Link to="/">
            <Menu.Item>Sair</Menu.Item>
          </Link>
        </Menu>
      </Header>
    </Layout>
  );
}
