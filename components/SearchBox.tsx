"use client";

import { useState } from "react";

const SearchBox = () => {
    const [query, setQuery] = useState("");

    const matching = students.filter((student) => student.firstName.toLowerCase().includes(query.toLowerCase())
    );

    const handleQueryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <input 
                type="text" 
                value={query}
                onChange={handleQueryChange}
                placeholder="Student Name"
                className="flex-1 rounded-lg border botder-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
                />
        </div>
    );
};

export default SearchBox;