import React from "react";


const Options = ({number, unSelectedCourseList, disabled,choicesid,change}) => {

  return (
    <div >
     <label htmlFor="set"> {number}</label>
      <select onChange={change} name={choicesid} id={choicesid} disabled={disabled}>
        <option value="select">Please Select</option>
        {unSelectedCourseList(`${choicesid}`).map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
          
        ))}
        
      </select>
    </div>
  );
};

export default Options;
