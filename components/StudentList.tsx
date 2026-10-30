import StudentCard from "./StudentCard";

type Student = {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
};

type StudentListProps = {
  students: Student[];
  onRemove: (id: number) => void;
};

const StudentList = ({ students, onRemove }: StudentListProps) => (
  <ul className="mt-6 flex flex-col gap-4">
    {students.length === 0 ? (
      <li className="text-center text-slate-500">No students found.</li>
    ) : (
      students.map((student) => (
        <StudentCard key={student.id} {...student} onRemove={onRemove} />
      ))
    )}
  </ul>
);

export default StudentList;
