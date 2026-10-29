interface studentRowProps {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

const StudentCard = ({
  id,
  firstName,
  lastName,
  grade,
  average,
}: studentRowProps) => {
  <li className="flex items-center justify-between border-b border-slate-200 py-3">
    <div>
      <span className="font-medium text-slate-900">{id}</span>
      <span className="font-medium text-slate-900">{firstName}</span>
      <span className="font-medium text-slate-900">{lastName}</span>
      <span className="font-medium text-slate-900">{grade}</span>
      <span className="font-medium text-slate-900">{average}</span>
    </div>
  </li>;
};

export default StudentCard;
