// import StudentCard from "./StudentCard";
import SearchBox from "./SearchBox";
import StudentList from "./StudentList";

const StudentPortal = () => {
  return (
    <div>
      <section>
        <h2 className="text-xl font-bold">Overview</h2>
      </section>
      <section>
        <h1 className="font-bold text-xl">Students</h1>
        {/* Search Box goes here */}
        <StudentList />
      </section>
      <section>
        <h1 className="font-bold text-xl">Add Student</h1>
        {/* Add student goes here */}
      </section>
    </div>
  );
};

export default StudentPortal;
