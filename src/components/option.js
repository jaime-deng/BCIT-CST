import userEvent from "@testing-library/user-event";
import React from "react";


const Options = ({ id, state, number, unSelectedCourseList, choicesid, change }) => {

  const flag = ['', 'one', 'two', 'three', 'four', 'five', 'six']

  let disabled = false

  const opts = []
  if (state[flag[id - 1]] == "Defer") {
    disabled = true
    opts.push(<option value="Defer" disabled={true} selected={true}>Defer</option>)

  } else if (state[choicesid] == '') {

    opts.push(<option value="select" hidden selected>Please select</option>)
    unSelectedCourseList().map(item => {
      opts.push(<option key={item} value={item}  >{item}</option>)
    })
  } else {
    opts.push(<option key={state[choicesid]} value={state[choicesid]}>{state[choicesid]}</option>)
    unSelectedCourseList().map(item => {
      opts.push(<option key={item} value={item} >{item}</option>)
    })
  }
  //console.log(opts);
  return (
    <div className="selector">
      <label htmlFor="set"> {number}</label>
      <select onChange={change} name={choicesid} id={choicesid} disabled={disabled} required>
        {opts}
      </select>
    </div>
  );
};

export default Options;
