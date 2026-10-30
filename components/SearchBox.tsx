/**
 * File: components/SearchBox.tsx
 * Author: Devon Huynh
 * Date: October 29, 2026
 * SearchBox is a textbox that allows the user to search the student list by name. It filters the through the list using the query and the queryChange to locate the student by their name.
 */

// Search Box
"use client";

interface SearchBoxProps {
    query: string;
    onQueryChange: (query: string) => void;
}

const SearchBox = ({query, onQueryChange}: SearchBoxProps) => {
    return (
        <div>
            <input 
                type="text" 
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="Student Name"
                className="flex-1 rounded-lg border botder-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
                />
        </div>
    );
};

export default SearchBox;