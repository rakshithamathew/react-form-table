import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState, useContext } from "react";
import { StudentDataTable } from "./StudentDataTable";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");

  const [student, setStudent] = useContext(StudentDataTable);

  const Submit = () => {
    if (name || age || course || batch) {
      setStudent([
        ...student,
        {
          name,
          age,
          course,
          batch,
        },
      ]);
    }
  };

  return (
    <>
    <h1>Student Add Page</h1>
      <div class="form">
        NAME
        <input
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        AGE
        <input
          type="text"
          name="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br></br>
        COURSE
        <input
          type="text"
          name="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <br></br>
        BATCH
        <input
          type="text"
          name="Batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
        <br></br>
      </div>

      <div className="add-cancel-btn">
        <Link to="/student" className="btn">
          Cancel
        </Link>
        <Link to="/student" className="btn" onClick={Submit}>
          Submit
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default AddStudent;
