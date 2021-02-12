import React, { useState } from "react";

const courseList = ["Web & Mobile","AI & Machine", "Programming Paradigms","Technical Programming","Cloud Computing (DTC)","Predictive Analytics (DTC)"]
const Options = (choices) => {
  const [course, setCourse] = useState([]);
  function selectChanged(event) {
    const targetId = event.target.id;
    const selection = event.target.value;
    setCourse([...course, { selection, list: targetId }]);
  }
  function unSelectedCourseList(list) {
    return courseList.filter((select) => {
        return !course.find((selectOption) => {
              return selectOption.course === select && selectOption.list !== list;
              });
      
    });
  }
  return (
    <div >
     <label htmlFor="set"> {choices.number}</label>
      <select onChange={selectChanged} name={choices.id} id={choices.id}>
        <option value="select">Please Select</option>
        {unSelectedCourseList(`${choices.id}`).map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
        <option value="Defer">Defer</option>
      </select>
    </div>
  );
};

export default Options;
