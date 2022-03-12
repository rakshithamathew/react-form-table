import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StudentDataTable } from "./StudentDataTable";
import "./styles.css";

const Student = () => {
  const [inputValue] = useContext(StudentDataTable);

  return (
    <>
      <div className="student-container">
        <h1>Student Details List</h1>
        <Link to="/student/addStudent" className="btn">
          Add Student
        </Link>
      </div>
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Batch</TableCell>
                <TableCell>Change</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inputValue.map((student) => {
                const { ID, name, age, course, batch } = student;
                return (
                  <TableRow key={ID}>
                    <TableCell component="th" scope="row">
                      {name}
                    </TableCell>
                    <TableCell>{age}</TableCell>
                    <TableCell>{course}</TableCell>
                    <TableCell>{batch}</TableCell>
                    <TableCell>
                      <Link to={`/student/edit/${ID}`}>Edit</Link>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Student;
