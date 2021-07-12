import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const ContentPage = ({ children }) => {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        marginTop: "20px",
        minHeight: 500,
        background: "white",
      }}
    >
      {children}
    </Content>
  );
};

export default ContentPage;
