import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
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
    const teachersCol = collection(db, "childrens");
    const teacherSnapshot = await getDocs(teachersCol);
    setData(teacherSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    setLoading(false);
  }

  async function addTeacher(teacher) {
    setLoading(true);

    try {
      const teacherRef = await addDoc(collection(db, "childrens"), teacher);
      setData([...data, { ...teacher, id: teacherRef.id }]);
      setOpen(false);
      message.success("Studend added succesfully");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  async function deleteTeacher(id) {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "childrens", id));
      setData(data.filter((teacher) => teacher.id != id));
      message.success("Deleted Succesfully");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  async function updateTeacher(id, updatedTeacherData) {
    try {
      setLoading(true);

      const updatedTeacher = {
        ...updatedTeacherData,
      };

      await updateDoc(doc(db, "childrens", id), updatedTeacher);

      setData(
        data.map((teacher) => (teacher.id === id ? updatedTeacher : teacher))
      );

      message.success("Student updated successfully");
      setOpen(false);
    } catch (error) {
      console.error("Error updating teacher:", error);
      message.error("Failed to update teacher");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTeachers();
  }, []);

  return {
    getTeachers,
    deleteTeacher,
    addTeacher,
    updateTeacher,
    loading,
    data,
    open,
    setOpen,
  };
};
