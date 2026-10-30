"use client";
import { useState } from "react";
import { studentList } from "@/data/students";
import AddStudentForm from "./AddStudent";
import SearchBox from "./SearchBox";
import StatsPanel from "./StatsPanel";
import StudentList from "./StudentList";

const StudentPortal = () => {
  const [students, setStudents] = useState(studentList);
  const [searchText, setSearchText] = useState("");

  const normalizedSearch = searchText.trim().toLowerCase();
  const filteredStudents = students.filter((student) =>
    `${student.firstName} ${student.lastName}`
      .toLowerCase()
      .includes(normalizedSearch),
  );

  const handleRemove = (id: number) => {
    setStudents((current) => current.filter((student) => student.id !== id));
  };

  const handleClearAll = () => setStudents([]);

  const handleAdd = (
    firstName: string,
    lastName: string,
    grade: number,
    average: number,
  ) => {
    const cleanFirstName = firstName.trim();
    const cleanLastName = lastName.trim();

    if (!cleanFirstName || !cleanLastName) return;

    setStudents((current) => [
      ...current,
      {
        id:
          current.reduce((maxId, student) => Math.max(maxId, student.id), 0) +
          1,
        firstName: cleanFirstName,
        lastName: cleanLastName,
        grade,
        average,
      },
    ]);
  };
  return (
    <div>
      <section>
        <h2 className="text-xl font-bold">Overview</h2>
        <StatsPanel students={students} />
      </section>
      <section>
        <h1 className="font-bold text-xl">Students</h1>
        <SearchBox query={searchText} onQueryChange={setSearchText} />
        <StudentList students={filteredStudents} onRemove={handleRemove} />
        <button
          onClick={handleClearAll}
          className=" mt-4 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700 transition cursor-pointer"
        >
          Clear All Students
        </button>
      </section>
      <section>
        <h1 className="font-bold text-xl">Add Student</h1>
        <AddStudentForm onAdd={handleAdd} />
      </section>
    </div>
  );
};

export default StudentPortal;
