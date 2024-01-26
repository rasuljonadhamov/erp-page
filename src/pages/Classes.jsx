import { Button, Drawer, Flex, Form, Input, Select, Table } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import useTeacher from "../hooks/useTeacher";
import { useState } from "react";

const Classes = () => {
  const [selectVal, setSelectVal] = useState("a")
  const [form] = Form.useForm();
  const { open, setOpen, loading, data } = useTeacher();

  const onFinish = (values) => {
    console.log({...values, selectVal});

    console.log("hello");
  };

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

  return (
    <div>
      <Flex justify="space-between">
        <h1>Childrens</h1>
        <Button
          type="primary"
          size="large"
          icon={<PlusCircleOutlined />}
          onClick={() => setOpen(true)}
        ></Button>
      </Flex>

      <br />

      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        dataSource={data}
      ></Table>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Add New Children"
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
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

          <Select
            defaultValue="A"
            style={{ width: "100%", marginBottom: "20px" }}
            name="value"
            onChange={(value) => setSelectVal(value)}
            options={[
              { value: "a", label: "A" },
              { value: "b", label: "B" },
              { value: "b", label: "C" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />

          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default Classes;
