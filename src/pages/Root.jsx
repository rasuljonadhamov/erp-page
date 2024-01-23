import { useState } from "react";
import { Button, Dropdown, Flex, Input, Layout, theme } from "antd";
import MyHeader from "../components/Header";
import MySlider from "../components/MySlider";
const { Content } = Layout;

const items = [
  {
    key: "1",
    label: <p>Active</p>,
  },
  {
    key: "2",
    label: <p>Inactive</p>,
  },
];

const Root = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <MySlider collapsed={collapsed} />
      <Layout>
        <MyHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Flex gap={20}>
            <Flex gap={5} style={{ flexDirection: "column" }}>
              <label>Guruh Nomi</label>
              <Input
                style={{ width: "200px", marginRight: "10px" }}
                placeholder="Basic usage"
              />
            </Flex>
            <Flex gap={5} style={{ flexDirection: "column" }}>
              <label>Holati</label>
              <Dropdown menu={{ items }} placement="bottom" arrow>
                <Button>Active</Button>
              </Dropdown>
            </Flex>

            <Button type="default" style={{ marginTop: "32px" }}>
              Clear
            </Button>
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Root;
