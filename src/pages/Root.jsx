import { useState } from "react";
import { Layout } from "antd";
import MyHeader from "../components/Header";
import MySlider from "../components/MySlider";
import MyContent from "../components/MyContent";

const Root = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <MySlider collapsed={collapsed} />
      <Layout>
        <MyHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <MyContent />
      </Layout>
    </Layout>
  );
};
export default Root;
