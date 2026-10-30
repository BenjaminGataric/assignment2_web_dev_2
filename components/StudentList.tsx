import StudentCard from "./StudentCard";
import { studentList } from "@/data/students";

const StudentList = () => {
  return (
    <ul className="mt-6 flex flex-col gap-4">
      {studentList.length === 0 ? (
        <li className="text-center text-slate-500">No students found.</li>
      ) : (
        studentList.map((Student) => (
          <StudentCard
            key={Student.id}
            id={Student.id}
            firstName={Student.firstName}
            lastName={Student.lastName}
            grade={Student.grade}
            average={Student.average}
          />
        ))
      )}
    </ul>
  );
};

export default StudentList;
