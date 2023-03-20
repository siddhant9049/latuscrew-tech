import React from 'react';
import './style.css';
import { useState } from 'react';
// 1. Stundent Name & Roll Number save in state
// 2. Adding the student name, rollnumber, even in the list
//3. Rendering list using map in form of a table row

export default function App() {
  const [rollNoType, setRollNoType] = useState([]);
  const [students, setStudents] = useState([]);
  const [rolln, setrolln] = useState('');
  const [studentname, setstudentname] = useState('');

  const studnetnamee = (e) => {
    setstudentname(e.target.value);
  };

  const rollnumm = (e) => {
    setrolln(e.target.value);
  };

  const onclick = () => {
    const newStudent = {
      name: studentname,
      rollNo: rolln,
    };
    setStudents([...students, newStudent]);
   let newRollNoType=""
       if (rolln % 2 === 0) {
      (newRollNoType='Even');
    } else {
      (newRollNoType='Odd');
    }
    setRollNoType([...rollNoType, newRollNoType]);

    setstudentname('');
    setrolln('');
  };
  return (
    <div>
      <h1>Lotuscrew test </h1>
      <input type="text" placeholder="student name" onChange={studnetnamee} />
      <br />
      <br />

      <input type="number" placeholder="roll number" onChange={rollnumm} />
      <br />
      <br />

      <button onClick={onclick}>Add</button>

      <table>
        <thead>
          <th>Student Name</th>
          <th> Roll No </th>
          <th> Even or odd </th>
        </thead>
        <tr>
          <td>shraddha</td>
          <td> 16 </td>
          <td> Even </td>
        </tr>
        <tr>
          <td> Atul</td>
          <td> 15 </td>
          <td> odd </td>
        </tr>
        {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{rollNoType[index]}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}
