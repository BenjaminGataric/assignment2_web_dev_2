/**
 * File: components/Addstudent.tsx
 * Author: Devon Huynh
 * Date: October 27, 2026
 * This component displays the inputs required to add a students name and their grade.
 * It uses useState from react to handle eveent changes
 */

// Add Student Form
"use client";

import {useState} from "react";

interface AddStudentProps {
    onAdd: (firstName: string, lastName: string, grade: number, average: number) => void;
}

const AddStudentForm = ({onAdd}: AddStudentProps) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [grade, setGrade] = useState("");
    const [average, setAverage] = useState("");

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGrade(event.target.value);
    };

    const handleAverageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAverage(event.target.value);
    };

    const handleClick = () => {
        if (firstName === "") {
            return;
        }
        onAdd(firstName, lastName, Number(grade), Number(average));
        setFirstName("");
        setLastName("");
        setGrade("");
        setAverage("");
    };
    
    return (
        <div className="flex gap-3">
            <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="First Name"
                className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
            />
            <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Last Name"
                className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
            />
            <input
                type="number"
                value={grade}
                placeholder="Enter Grade"
                onChange={handleGradeChange}
                className="w-20 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
            />
            <input
                type="number"
                value={average}
                placeholder="Enter Average"
                onChange={handleAverageChange}
                className="w-20 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
            />
            <button
                onClick={handleClick}
                className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 transition cursor-pointer"
            >
                Add Student
            </button>
        </div>
    );
};

export default AddStudentForm;