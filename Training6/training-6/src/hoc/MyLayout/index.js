import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { Layout } from "antd";

const MyLayout = (props) => {
  return (
    <div className="container">
      <Header />
      <Layout>
        <Layout>
          <Sidebar />
          {props.children}
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
};

export default MyLayout;
