/**
 * File: components/NavBar.tsx
 * Author: Noah Urbano
 * Date: October 27, 2026
 * This component displays the school name in the page header.
 * It accepts no props and has no state.
 * Its three anchor links jump to sections on the same page.
 * It outputs a responsive navigation bar for the portal.
 */

// Page navigation
const NavBar = () => {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-lg font-bold text-slate-900">New Generation High School</h1>
        <nav className="flex flex-wrap gap-4 text-sm font-medium text-blue-700">
          <a href="#overview" className="hover:text-blue-900">Overview</a>
          <a href="#students" className="hover:text-blue-900">Students</a>
          <a href="#add-student" className="hover:text-blue-900">Add a student</a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
