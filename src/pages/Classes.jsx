import { Button, Drawer, Flex, Form, Input, Select, Table } from "antd";
import {
  PlusCircleOutlined,
  DeleteFilled,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import useStudent from "../hooks/useStudent";

const Classes = () => {
  const [editTeacher, setEditTeacher] = useState(null);
  const [selectVal, setSelectVal] = useState("a");
  const [form] = Form.useForm();
  const {
    open,
    setOpen,
    loading,
    data,
    addTeacher,
    deleteTeacher,
    updateTeacher,
  } = useStudent();

  const onFinish = (values) => {
    if (editTeacher) {
      updateTeacher(editTeacher.id, { ...values, selectVal })
        .then(() => setOpen(false))
        .catch((error) => {
          console.log(error);
        });
    } else {
      addTeacher({ ...values, selectVal });
    }
  };

  const handleEditTeacher = (id) => {
    setEditTeacher(data.find((teacher) => teacher.id === id));
    setOpen(true);
  };

  const columns = [
    {
      title: "O'quvchilar",
      dataIndex: "firstName",
      key: "firsName",
    },
    {
      title: "Familya",
      dataIndex: "lastName",
      key: "lastname",
    },
    {
      title: "Class",
      dataIndex: "selectVal",
      key: "selectVal",
    },
    {
      title: "Actions",
      key: "id",
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

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

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

          <Select
            defaultValue="A"
            rules={[
              {
                required: true,
                message: "Sinfni  kiriting!",
              },
            ]}
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
