import React from "react";
import { Layout } from "antd";
import HeaderPage from "./Header";
import LeftPage from "./LeftPage";
import ContentPage from "./Content";
import FooterPage from "./Footer";

const BasicLayout = ({ children }) => {
  return (
    <div className="basic-layout">
      <Layout>
        <HeaderPage />
        <Layout>
          <LeftPage />
          <Layout style={{ padding: "0 24px 24px" }}>
            <ContentPage>{children}</ContentPage>
          </Layout>
        </Layout>
        <FooterPage />
      </Layout>
    </div>
  );
};

export default BasicLayout;
