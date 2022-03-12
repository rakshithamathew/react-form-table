import React, { useState, createContext } from 'react'

export const StudentDataTable = createContext();

export const StudentData = props => {

    const [student, setStudent] = useState([
        {
            "ID": "1",
            "name": "John Wikey",
            "age": "23",
            "course": "HTML",
            "batch": "October",
        },
        {
            "ID": "2",
            "name": "William Rockly",
            "age": "19",
            "course": "JAVA",
            "batch": "November"
        },
        {
            "ID": "3",
            "name": "Shan Beiley",
            "age": "43",
            "course": "CSS",
            "batch": "December"
        },
        {
            "ID": "4",
            "name": "Roshan Sharma",
            "age": "34",
            "course": "React",
            "batch": "January"
        }
    ])
    return (
        <div>
            <StudentDataTable.Provider value={[student, setStudent]}>
                {props.children}
            </StudentDataTable.Provider>
        </div>
    )
}