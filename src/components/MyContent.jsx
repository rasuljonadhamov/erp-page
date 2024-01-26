import { Button, Dropdown, Flex, Input, Table, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

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

const sharedOnCell = (_, index) => {
  if (index === 1) {
    return {
      colSpan: 0,
    };
  }
  return {};
};

const columns = [
  {
    title: "Byurtma",
    dataIndex: "key",
    rowScope: "row",
  },
  {
    title: "Guruh Nomi",
    dataIndex: "name",
    render: (text) => (
      <a
        style={{
          color: "black",
        }}
      >
        {text}
      </a>
    ),
    onCell: (_, index) => ({
      colSpan: index === 1 ? 5 : 1,
    }),
    style: {
      backgroundColor: "red",
      color: "green",
    },
  },
  {
    title: "Holati",
    dataIndex: "status",
    render: (status) => (
      <span
        style={{
          padding: "6px 12px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "5px",
        }}
      >
        {status}
      </span>
    ),
    onCell: sharedOnCell,
  },
  {
    title: "Lesson Start Date",
    dataIndex: "start",
    onCell: sharedOnCell,
  },

  {
    title: "Lesson End Date",
    dataIndex: "end",
    onCell: sharedOnCell,
  },
  {
    title: "Info",
    render: () => (
      <a
        style={{
          backgroundColor: "#bc8e5c",
          padding: "6px 12px",
          color: "#fff",
          borderRadius: "6px",
        }}
      >
        Info
      </a>
    ),
    onCell: sharedOnCell,
  },
];

const data = [
  {
    key: "1",
    name: "Frontend ReactJs (Standart) FN12",
    status: "Active",
    start: "12 Avg 2023",
    end: "2 Avg 2023",
  },
  {
    key: "2",
    name: "Frontend  FN12",
    status: "Active",
    start: "9 Avg 2023",
    end: "12 Apr 2023",
  },
  {
    key: "3",
    name: "Frontend ReactJs (Standart) FN11",
    status: "Inactive",
    start: "2 Dec 2023",
    end: "12 Yan 2024",
  },
  {
    key: "4",
    name: "Frontend ReactJs (Standart) FN9",
    status: "Active",
    start: "12 Dec 2023",
    end: "12 Avg 2023",
  },
];

const MyContent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Outlet />
    </Content>
  );
};

export default MyContent;
