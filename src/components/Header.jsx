import { Button, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const MyHeader = ({ collapsed, setCollapsed }) => {
  return (
    <Header
      style={{
        padding: 0,
        position: "sticky",
        fontSize: "16px",
        top: 0,
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        gap: "1150px",
        justifyContent: "space-between",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          width: 64,
          height: 64,
          color: "white",
          marginRight: "auto",
        }}
      />

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: 1,
            label: "Chiqish",
            icon: <LogoutOutlined />,
          },
        ]}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  );
};

export default MyHeader;
