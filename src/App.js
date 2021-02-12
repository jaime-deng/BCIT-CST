import logo from './BCIT_LOGO.png';
import keyboard_logo from "./keyboard.jpeg";
import {useState} from "react";
import './App.css';
//import Select from './Select';
//import Options from "./components/option";

const courseList = ["Web & Mobile","AI & Machine", "Programming Paradigms","Technical Programming","Cloud Computing (DTC)","Predictive Analytics (DTC)", "defer"]
//const course_list2 = ["AI & Machine", "Programming Paradigms","Technical Programming","Cloud Computing (DTC)","Predictive Analytics (DTC)", "defer"]
function App() {
  //const[course, CourseDrop] = Select("Second Choice", "",course_list )

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
  
  
  //this callback function
  //will change state of a option e.g. web & mobile to true
  // but will make the 2nd choice for web & mobile to be false
  // the false will either make it inactive or hidden.
function Second(choice) {

  if (choice == true) {
    //make change the attribute to false
    //eg
    //<option value="Web & Mobile" hidden="false">Web & Mobile</option>
    // then also  make the "id=two option"[choice] = true
    //<option value="Web & Mobile" hidden="true" >Web & Mobile</option>
  }
}
  //possibly another function to update what options are being made false. to continue with a reduce list

  // another function to make the next choices show only defer when defer is first selected. e.g. 2nd choice is defer then 3-6th pick are also defer now.
  let FirstChoice = "First Choice";

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
<label htmlFor="name">Enter Your Legal First Name:</label>
        <input type="name" id="legal"
       pattern="[A-Z][a-z]" size="120" placeholder="Legal First Name" required></input>

<label htmlFor="name">Enter Your Prefer Name:</label>
        <input type="name" id="prefer"
       pattern="[A-Z][a-z]" size="120" placeholder="Prefer Name" required></input>



<label htmlFor="name">Enter Your Legal Last Name:</label>
        <input type="name" id="last"
       pattern="[A-Z][a-z]" size="120" placeholder="Legal Last Name" required></input>

<label htmlFor="name">Enter BCIT STUDENT ID:</label>
        <input type="student" id="student"
       pattern="^A+\d*" size="9" minLength="9" placeholder="A0" required></input>

<label htmlFor="email">Enter your @my.bcit.ca /@bcit.ca email:</label>
        <input type="email" id="email"
       pattern=".+@my.bcit.ca | .+@bcit.ca" size="100" placeholder="JohnDoe@my.bcit.ca" required></input>


<label htmlFor="set"> SET A,B,C,D,E,F,X,O:</label>
       <select name="set" id="set">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="X">X</option>
        <option value="O">O</option>
      </select>


    </form>
     

      <div className="Divider1">
        <h2 className="Divider1Text">Section 2: Option Selection</h2>
      </div>
      
      
        
    {/* <label htmlFor="set"> First Choice:</label>
       <select name="one" id="one">
         <option value="select">Please Select</option>
        <option value="Web & Mobile" >Web & Mobile</option>
        <option value="AI & Machine">AI & Machine</option>
        <option value="Programming Paradigms">Programming Paradigms</option>
        <option value="Technical Programming">Technical Programming</option>
        <option value="Cloud Computing (DTC)">Cloud Computing (DTC)</option>
        <option value="Predictive Analytics (DTC)">Predictive Analytics (DTC)</option>
        <option value="Defer">Defer</option>
       
      </select> */}

<div className="options">
      {/* //{course.map((pick) => (
      //   <p>{pick.course}</p>
      // ))} */}
      <form>
      
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
      <label htmlFor="set"> Fourth choice:</label>
      <select onChange={selectChanged} name="one" id="four">
        <option value="select">Please Select</option>
        {unSelectedCourseList("four").map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
        <option value="Defer">Defer</option>
      </select>
      <label htmlFor="set"> Fifth choice:</label>
      <select onChange={selectChanged} name="one" id="five">
        <option value="select">Please Select</option>
        {unSelectedCourseList("five").map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
        <option value="Defer">Defer</option>
      </select>
      
      <label htmlFor="set"> Sixth choice:</label>
      <select onChange={selectChanged} name="one" id="six">
        <option value="select">Please Select</option>
        {unSelectedCourseList("six").map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
        <option value="Defer">Defer</option>
      </select>
    
      {/* <Options choices="First Choice" /> */}

      
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
