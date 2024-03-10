import React from "react";
import { useState, useEffect } from "react";

// export default function App6() {
//   const obj1 = { name: "John",age:20 };
//   const student = {...obj1, city:'NYC'};
//   console.log(student);
// }

// export default function App6() {
//   const obj1 = { name: "John",age:20 };
//   const obj2 = { age: 30 };
//   const student = {...obj1, ...obj2};
//   console.log(student);
// }

// export default function App6() {
//   const arr1 = [1,4,5];
//   const arr2 = [6,8,1];
//   const newArr = [...arr1, ...arr2];
//   console.log(newArr);
// }

// export default function App6() {
//   const students = [
//     { name: "John", age: 34 },
//     { name: "Cathy", age: 30 },
//   ];
//   // students.push({ name: "Mike", age: 25 }) //only works with JS, does not work with react state objects
//   const newArray = [...students, { name: "Mike", age: 25 }]; // [1, 2, 3, 4, 5, 6]
//   console.log(newArray);
// }

export default function App6() {
  const [student, setStudent] = useState({ name: "", age: "" });
  const [students, setStudents] = useState([]);
  const addStudent = () => {
    student.id = Date.now();
    setStudents((prevStudents) => [...prevStudents, student]); //In React, it isn't allowed to change the original state array, so we can't use the push() method. We use the spread syntax (...) to unpack the elements of the existing array into a new array and add another value at the end.
    setStudent({ name: "", age: "" });
  };
  const deleteStudent = (id) => {
    setStudents(students.filter((e) => e.id !== id));
  };
  const editStudent = (value) => {
    setStudent(value);
    deleteStudent(value.id);
  };
  return (
    <>
      <p>
        <input
          type="text"
          value={student.name}
          onChange={(e) =>
            setStudent((prevStudent) => ({
              ...prevStudent,
              ...{ name: e.target.value },
            }))
          }
          placeholder="Enter Name"
        ></input>
      </p>
      <p>
        <input
          type="text"
          value={student.age}
          onChange={(e) =>
            setStudent((prevStudent) => ({
              ...prevStudent,
              ...{ age: e.target.value },
            }))
          }
          placeholder="Enter Age"
        ></input>
      </p>
      <p>
        <button onClick={addStudent}>Add Student</button>
      </p>
      <div>
        {students &&
          students.map((value, index) => (
            <div key={index}>
              {value.id}-{value.name}-{value.age} -
              <button onClick={() => deleteStudent(value.id)}>Delete</button>
              <button onClick={() => editStudent(value)}>Edit</button>
            </div>
          ))}
      </div>
    </>
  );
}

///////

// export default function App6() {
//   const [student, setStudent] = useState({ name: "", age: "" });
//   const [students, setStudents] = useState([]);
//   const addStudent = () => {
//     setStudents((prevStudents) => [...prevStudents, student]);
//   };
//   const deleteStudent = (name) => {
//     setStudents(students.filter((e) => e.name !== name));
//   };
//   const editStudent = (value) => {
//     setStudent(() => value);
//     deleteStudent(value.name);
//   };
//   return (
//     <>
//       <p>
//         <input
//           type="text"
//           value={student.name}
//           onChange={(e) =>
//             setStudent((prevStudent) => ({
//               ...prevStudent,
//               ...{ name: e.target.value },
//             }))
//           }
//           placeholder="Enter Name"
//         ></input>
//       </p>
//       <p>
//         <input
//           type="text"
//           value={student.age}
//           onChange={(e) =>
//             setStudent((prevStudent) => ({
//               ...prevStudent,
//               ...{ age: e.target.value },
//             }))
//           }
//           placeholder="Enter Age"
//         ></input>
//       </p>
//       <p>
//         <button onClick={addStudent}>Add Student</button>
//       </p>
//       <div>
//         {students &&
//           students.map((value, index) => (
//             <div key={index}>
//               {value.name}-{value.age} -{" "}
//               <button onClick={() => deleteStudent(value.name)}>Delete</button>
//               <button onClick={() => editStudent(value)}>Edit</button>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// }

/////////////

// export default function App6() {
//     const [student, setStudent] = useState({});
//     const [students, setStudents] = useState([]);
//     const addStudent = () => {
//       setStudents((prevStudents) => [...prevStudents, student]);
//     };
//     const deleteStudent = (name) => {
//       setStudents(students.filter((e) => e.name !== name));
//     };
//     return (
//       <>
//         <p>
//           <input
//             type="text"
//             onChange={(e) =>
//               setStudent((prevStudent) => ({
//                 ...prevStudent,
//                 ...{ name: e.target.value },
//               }))
//             }
//             placeholder="Enter Name"
//           ></input>
//         </p>
//         <p>
//           <input
//             type="text"
//             onChange={(e) =>
//               setStudent((prevStudent) => ({
//                 ...prevStudent,
//                 ...{ age: e.target.value },
//               }))
//             }
//             placeholder="Enter Age"
//           ></input>
//         </p>
//         <p>
//           <button onClick={addStudent}>Add Student</button>
//         </p>
//         <div>
//           {students &&
//             students.map((value, index) => (
//               <div key={index}>
//                 {value.name}-{value.age} -{" "}
//                 <button onClick={() => deleteStudent(value.name)}>Delete</button>
//               </div>
//             ))}
//         </div>
//       </>
//     );
//   }

/////////////////

// export default function App6() {
//     const [student, setStudent] = useState({});
//     const [students, setStudents] = useState([]);
//     const addStudent = () => {
//       setStudents((prevStudents) => [...prevStudents, student]);
//     };
//     return (
//       <>
//         <p>
//           <input
//             type="text"
//             onChange={(e) =>
//               setStudent((prevStudent) => ({
//                 ...prevStudent,
//                 ...{ name: e.target.value },
//               }))
//             }
//             placeholder="Enter Name"
//           ></input>
//         </p>
//         <p>
//           <input
//             type="text"
//             onChange={(e) =>
//               setStudent((prevStudent) => ({
//                 ...prevStudent,
//                 ...{ age: e.target.value },
//               }))
//             }
//             placeholder="Enter Age"
//           ></input>
//         </p>
//         <p>
//           <button onClick={addStudent}>Add Student</button>
//         </p>
//         <div>
//           {students &&
//             students.map((value, index) => (
//               <div key={index}>
//                 {value.name}-{value.age}
//               </div>
//             ))}
//         </div>
//       </>
//     );
//   }

/////////

// export default function App6() {
//     const [student, setStudent] = useState({ name: "John", age: 34 });
//     console.log(Date());
//     return (
//       <>
//         <p>
//           <input
//             type="text"
//             onChange={(e) =>
//               setStudent((prevState) => ({
//                 ...prevState,
//                 ...{ name: e.target.value },
//               }))
//             }
//             placeholder="Enter Name"
//           ></input>
//         </p>
//         <p>
//           <input
//             type="text"
//             onChange={(e) =>
//               setStudent((prevState) => ({
//                 ...prevState,
//                 ...{ age: e.target.value },
//               }))
//             }
//             placeholder="Enter Age"
//           ></input>
//         </p>
//         <span>
//           {student.name}-{student.age}
//         </span>
//       </>
//     );
//   }

///////////////

// const complexFunction = () => {
//   console.log("Initializing count");
//   return 5;
// };
// export default function App6() {
//   // const [count, setCount] = useState(() => {
//   //   return complexFunction() //runs once
//   // });
//   const [count, setCount] = useState(complexFunction()); //runs on every render
//   return (
//     <>
//       <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
//       <span>{count}</span>
//       <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
//     </>
//   );
// }

///////////////
// export default function App6() {
//   const [count, setCount] = useState(1);
//   console.log(Date());
//   return (
//     <>
//       <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
//       <span>{count}</span>
//       <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
//     </>
//   );
// }

///////////////////
// export default function App6() {
//   const [runs, setRuns] = useState(0);
//   const [wickets, setWickets] = useState(0);
//   console.log("Component loaded");
//   useEffect(() => {
//     console.log("Better Luck Next Time!");
//   },[wickets]);
//   return (
//     <>
//       <button onClick={() => setRuns((prevState) => prevState + 1)}>
//         Runs({runs})
//       </button>
//       <button onClick={() => setWickets((prevState) => prevState + 1)}>
//         Wickets({wickets})
//       </button>
//     </>
//   );
// }

// useEffect(() => {
//   if (wickets > 0) console.log("Better Luck Next Time!");
// }, [wickets]);
// useEffect(() => {
//   if (runs > 0) console.log("Good Job!");
// }, [runs]);

///////////////

// export default function App6() {
//   const [count, setCount] = useState(0);
//   console.log("Component loaded");
//   return (
//     <>
//       <button onClick={() => setCount((prevState) => prevState + 1)}>
//         Click
//       </button>
//       <span>{count}</span>
//     </>
//   );
// }

///////////////
// export default function App6() {
//   const [count, setCount] = useState(0);
//   console.log("Component loaded");
//   return (
//     <>
//       <button onClick={() => setCount((prevState) => 5)}>Click</button>
//       <span>{count}</span>
//     </>
//   );
// }
///////////////
