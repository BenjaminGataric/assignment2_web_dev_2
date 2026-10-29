interface studentRowProps {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

const StudentCard = ({
  firstName,
  lastName,
  grade,
  average,
}: studentRowProps) => {
  return (
    <li>
      <div>
        <span className="font-medium text-slate-900">
          Name: {firstName} {lastName}
        </span>
        <span className="font-medium text-slate-900"> Grade: {grade} </span>
        <span className="font-medium text-slate-900"> Average: {average} </span>
      </div>
    </li>
  );
};

export default StudentCard;
