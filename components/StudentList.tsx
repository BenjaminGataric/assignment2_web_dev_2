import StudentCard from "./StudentCard";
import { studentList } from "@/data/students";

const StudentList = () => {
  return (
    <div className="flex items-center justify-between bg-white rounded-2xl shadow-md p-6 gap-5">
      <ul className="mt-6">
        {studentList.map((Student) => (
          <StudentCard
            key={Student.id}
            id={Student.id}
            firstName={Student.firstName}
            lastName={Student.lastName}
            grade={Student.grade}
            average={Student.average}
          />
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
