"use client";

import { useState } from "react";
interface studentRowProps {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
  onRemove: (id: number) => void;
}

const StudentCard = ({
  id,
  firstName,
  lastName,
  grade,
  average,
  onRemove,
}: studentRowProps) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const showDetails = () => setDetailsOpen((isOpen) => !isOpen);
  const removeStudent = () => onRemove(id);

  return (
    <li className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <h2 className="font-medium text-slate-900">
          {firstName} {lastName}
        </h2>
        <p className="font-medium text-slate-900">Grade: {grade}</p>
        {detailsOpen && (
          <div>
            <p className="font-medium text-slate-900">Average: {average}</p>
            {average >= 80 && (
              <span className="inline-flex rounded-full bg-amber-100 px-2 py-1 text-sm font-medium text-amber-800">
                Honour roll
              </span>
            )}
          </div>
        )}
        <button
          type="button"
          onClick={showDetails}
          className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition hover:bg-green-300"
        >
          {detailsOpen ? "Hide details" : "Show details"}
        </button>
        <button
          type="button"
          onClick={removeStudent}
          className="rounded-lg border border-slate-300 px-4 py-2 m-2 font-semibold text-slate-700 transition hover:bg-red-300"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default StudentCard;
