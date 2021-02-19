import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import { useHistory } from 'react-router-dom';

//COMPONENTS
import Header from "./components/Header.js"
import Banner from "./components/Banner.js"
import NavBar from "./components/NavBar.js"
import Content from "./components/Content.js"
import Titles from "./components/Titles.js"
import Buttons from "./components/Buttons.js"
import Footer from "./components/Footer.js"

import Home from "./components/Home.js"


//import Select from './Select';
//import Options from "./components/option";

const courseList = ["Web & Mobile", "AI & Machine", "Programming Paradigms", "Technical Programming", "Cloud Computing (DTC)", "Predictive Analytics (DTC)", "defer"]
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
    <Router>
    <div className="App">
      <Header />

      <Banner />

      <NavBar />

      <Content />

      <Titles text={"Section 1: Student Information"} />


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

      <Titles text={"Section 2: Option Selection"} />




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



      <hr />

        <Buttons />
        



      <Footer />

    </div>
    {/* <Route path="/" exact component={Home} /> */}
    </Router>
  );
}

export default App;
