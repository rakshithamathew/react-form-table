import { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { StudentDataTable } from "./StudentDataTable";

const Edit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  const [student, setStudent] = useContext(StudentDataTable);
  const { ID } = useParams();

  useEffect(() => {
    student.forEach((inputValue) => {
      if (inputValue.ID === ID) {
        setName(inputValue.name);
        setAge(inputValue.age);
        setCourse(inputValue.course);
        setBatch(inputValue.batch);
      }
    });
  }, [ID, student]);

  function Update() {
    setStudent((prevStudent) =>
      prevStudent.map((inputValue) =>
        inputValue.ID === ID
          ? {
              ID,
              name,
              age,
              batch,
              course,
            }
          : inputValue
      )
    );
  }
  return (
    <>
    <h1>Edit Details</h1>
      <div class="form">
        Name:
        <input
          type="text"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        Age:
        <input
          type="text"
          name="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br></br>
        Course:
        <input
          type="text"
          name="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <br></br>
        Batch:
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
        <Link to="/student" className="btn" onClick={Update}>
          Update
        </Link>
      </div>
    </>
  );
};

export default Edit;
