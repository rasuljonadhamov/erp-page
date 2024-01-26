import { Button, Drawer, Flex, Form, Input, Table, message } from "antd";
import {
  PlusCircleOutlined,
  DeleteFilled,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import useTeacher from "../hooks/useTeacher";

const Teacher = () => {
  const [editTeacher, setEditTeacher] = useState(null);
  const {
    data,
    loading,
    addTeacher,
    deleteTeacher,
    updateTeacher,
    open,
    setOpen,
  } = useTeacher();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (editTeacher) {
      updateTeacher(editTeacher.id, values);
      setEditTeacher(null);
      message.success("Teacher updated successfully");
    } else {
      addTeacher(values);
      message.success("Teacher added successfully");
    }
  };

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  const handleEditTeacher = (id) => {
    setEditTeacher(data.find((teacher) => teacher.id === id));
    setOpen(true);
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
    {
      title: "Actions",
      key: "lastname",
      render: (record) => (
        <>
          <Button
            loading={loading}
            type="primary"
            onClick={() => deleteTeacher(record.id)}
            danger
            style={{ marginRight: "10px" }}
            icon={<DeleteFilled />}
          ></Button>
          <Button
            type="primary"
            icon={<UserSwitchOutlined />}
            loading={loading}
            onClick={() => handleEditTeacher(record.id)}
          ></Button>
        </>
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
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={editTeacher}
        >
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
