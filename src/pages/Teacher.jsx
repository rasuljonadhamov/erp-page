import { Button, Drawer, Flex, Form, Input, Table } from "antd";
import { PlusCircleOutlined, DeleteFilled } from "@ant-design/icons";
import { useEffect } from "react";
import useTeacher from "../hooks/useTeacher";

const Teacher = () => {
  const { data, loading, addTeacher, deleteTeacher, open, setOpen } =
    useTeacher();
  const [form] = Form.useForm();
  console.log(data);

  const onFinish = (values) => {
    addTeacher(values);
    console.log("Success:", values);
  };

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

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
    {
      title: "Actions",
      key: "lastname",
      render: (record) => (
        <Button
          loading={loading}
          type="primary"
          onClick={() => deleteTeacher(record.id)}
          danger
          icon={<DeleteFilled />}
        ></Button>
      ),
    },
  ];

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

      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        dataSource={data}
      ></Table>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Add New Teacher"
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

export default Teacher;
