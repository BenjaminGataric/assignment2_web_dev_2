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
    <li className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <h2 className="font-medium text-slate-900">
          Name: {firstName} {lastName}
        </h2>
        <p className="font-medium text-slate-900"> Grade: {grade} </p>
        <p className="font-medium text-slate-900"> Average: {average} </p>
        <button className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer">
          Show Details
        </button>
        <button className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-red-100 transition cursor-pointer">
          Remove
        </button>
      </div>
    </li>
  );
};

export default StudentCard;
