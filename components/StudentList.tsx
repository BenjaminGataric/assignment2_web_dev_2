"use client";

import { useState } from "react";
import StudentCard from "./StudentCard";
import { studentList } from "@/data/students";

const StudentList = () => {
  const [students, setStudents] = useState(studentList);

  const handleRemove = (id: number) => {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id),
    );
  };

  return (
    <ul className="mt-6 flex flex-col gap-4">
      {students.length === 0 ? (
        <li className="text-center text-slate-500">No students found.</li>
      ) : (
        students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            firstName={student.firstName}
            lastName={student.lastName}
            grade={student.grade}
            average={student.average}
            onRemove={handleRemove}
          />
        ))
      )}
    </ul>
  );
};

export default StudentList;
