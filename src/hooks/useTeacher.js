import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { message } from "antd";

export default () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [data, setData] = useState(null);

  async function getTeachers() {
    setLoading(true);
    console.log("teacher fired");
    const teachersCol = collection(db, "teachers");
    const teacherSnapshot = await getDocs(teachersCol);
    setData(teacherSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    setLoading(false);
  }

  async function addTeacher(teacher) {
    setLoading(true);

    try {
      const teacherRef = await addDoc(collection(db, "teachers"), teacher);
      setData([...data, { ...teacher, id: teacherRef.id }]);
      setOpen(false);
      message.success("Teacher added succesfully");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  async function deleteTeacher(id) {
    setLoading(true);

    try {
      await deleteDoc(doc(db, "teachers", id));
      setData(data.filter((teacher) => teacher.id != id));
      message.success("Deleted Succesfully")
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getTeachers();
  }, []);

  return {
    getTeachers,
    deleteTeacher,
    addTeacher,
    loading,
    data,
    open,
    setOpen,
  };
};
