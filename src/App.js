import logo from './BCIT_LOGO.png';
import keyboard_logo from "./keyboard.jpeg";
import {useState} from "react";
import './App.css';
//import Select from './Select';
import FormSelect from "./components/form";
import Options from "./components/option";

const courseList = ["Web & Mobile","AI & Machine", "Programming Paradigms","Technical Programming","Cloud Computing (DTC)","Predictive Analytics (DTC)", "defer"]

function App() {
  

  const [course, setCourse] = useState([]);
  function selectChanged(event) {
    const targetId = event.target.id;
    const selection = event.target.value;
    setCourse([...course, { selection, list: targetId }]);
  }
  function unSelectedCourseList(list) {
    return courseList.filter((select) => {
        return !course.find((selectOption) => {
              return selectOption.selection === select && selectOption.list !== list;
              });
        
      
    });
  }
  
  

  

  // another function to make the next choices show only defer when defer is first selected. e.g. 2nd choice is defer then 3-6th pick are also defer now.
  

  return (
    <div className="App">
      <header className="App-header">
        <div className="Header">
          <img src={logo} className="App-logo" alt="logo" />

          <div className="HeaderText">
            <h2>BCIT Computing</h2>
            <h4>For a Complex World</h4>
          </div>
        </div>
      </header>


      <div className="Banner">
        <img src={keyboard_logo} className="img_banner" alt="img_banner" />
      </div>

      <div className="NavBar">
        <ul className="links">
          <li><a href="">BTech</a></li>
          <li><a href="">Program Updates</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Part-Time</a></li>
          <li><a href="">Full Time</a></li>
        </ul>
      </div>

      <div className="Static">
        <h1 className="header1">CST Option Selection</h1>

        <div className="InnerText">
          <h2>CST Option Selection - January 2021</h2>
          <h4>Option preferences for level 2 students going to 3rd term in January 2021</h4>
        </div>
      </div>

      <div className="Divider1">
        <h2 className="Divider1Text">Section 1: Student Information</h2>
      </div>

    <form>
      <FormSelect />


    </form>
     

      <div className="Divider1">
        <h2 className="Divider1Text">Section 2: Option Selection</h2>
      </div>
    

<div className="options">
      
      <form>
      <Options number="First choice" id="one" courseList={course} courseListarry={courseList} />
      <Options number="Second choice" id="two"/>
      <Options number="Third choice" id="three"/>
      <Options number="Fourth choice" id="four"/>
      <Options number="Fifth choice" id="five"/>
      <Options number="Sixth choice" id="six"/>
      <label htmlFor="set"> First choice:</label>
      <select onChange={selectChanged} name="one" id="one">
        <option value="select">Please Select</option>
        {unSelectedCourseList("one").map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
        <option value="Defer">Defer</option>
      </select>
      <label htmlFor="set"> Second choice:</label>
      <select onChange={selectChanged} name="one" id="two">
        <option value="select">Please Select</option>
        {unSelectedCourseList("two").map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
        <option value="Defer">Defer</option>
      </select>
      <label htmlFor="set"> Third choice:</label>
      <select onChange={selectChanged} name="one" id="three">
        <option value="select">Please Select</option>
        {unSelectedCourseList("three").map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
        <option value="Defer">Defer</option>
      </select>
      
    
      

      
    </form>
      </div>
      {/* ))}; */}
      

      <hr />

      <div className="Buttons">
        <button className="Button1">PREVIOUS</button>
        <button className="Button2">SUBMIT</button>
      </div>

      <footer>
        <h2>Copyright © 2021</h2>
      </footer>

    </div>
  );
}

export default App;
