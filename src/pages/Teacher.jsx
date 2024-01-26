import { Button, Drawer, Flex, Form, Input, Table } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const columns = [
  {
    title: "Ism",
    dataIndex: "firstName",
    key: "firsName",
  },
  {
    title: "Familya",
    dataIndex: "lastName",
    key: "lastname",
  },
];

const data = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Johnny",
    lastName: "Deep",
  },
];

const Teacher = () => {
  const [open, setOpen] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  async function getTeachers() {
    console.log("teacher fired");
  }

  useEffect(() => {
    getTeachers()
  } , [])

  return (
    <div>
      <Flex justify="space-between">
        <h1>Teachers</h1>
        <Button
          type="primary"
          size="large"
          icon={<PlusCircleOutlined />}
          onClick={() => setOpen(true)}
        ></Button>
      </Flex>

      <br />

      <Table columns={columns} dataSource={data}></Table>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Add New Teacher"
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Isimni kiriting"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Ismingizni kiriting!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Familyani kiriting"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Familyangizni kiriting!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default Teacher;
