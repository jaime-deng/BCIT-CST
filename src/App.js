import { useState } from "react";

import axios from 'axios';


//COMPONENTS
import Header from "./components/Header";
import Banner from "./components/Banner.js";
import NavBar from "./components/NavBar.js";
import Content from "./components/Content.js";
import Titles from "./components/Titles.js";
import Buttons from "./components/Buttons.js";
import Footer from "./components/Footer";

//JS Folder
import validateInfo from "../src/js/Validate";

//import Select from './Select';
import FormSelect from "./components/Form";
import Options from "./components/Option";

const courseList = ["Web & Mobile", "AI & Machine", "Programming Paradigms", "Technical Programming", "Cloud Computing (DTC)", "Predictive Analytics (DTC)", "Defer"]
function App() {
  // state of the array of course list
  const [course, setCourse] = useState({
    one: 'Please Select',
    two: 'Defer',
    three: 'Defer',
    four: 'Defer',
    five: 'Defer',
    six: 'Defer'
  });

  const [studentInfo, setStudentInfo] = useState({
    firstname: '',
    lastname: '',
    prefername: '',
    studentid: '',
    email: '',
    set: 'A'
  })

  const [error, setError] = useState({
    firstname: 'Must be Alphabetical ',
    lastname: 'Must be Alphabetical ',
    prefername: 'Must be Alphabetical ',
    studentid: 'Must begin with A0, and have 7 numbers afterwards',
    email: 'Must end with @my.bcit.ca or @bcit.ca',
    
  })
  //the initial state of options
  const initialState = {
    one: 'Defer',
    two: 'Defer',
    three: 'Defer',
    four: 'Defer',
    five: 'Defer',
    six: 'Defer'
  }

  const clearState = () => {
    setCourse({...initialState});
  }

  
  function handleClear(event) {
    event.preventDefault();
    clearState();
  }
  //when change occur will target the select and update the setCourse
  function selectChanged(event) {
    const targetId = event.target.id;
    const selection = event.target.value;
    if (targetId == "one" && selection == "Defer") {
      setCourse({
        ...course,
        [targetId]: selection,
        ["two"]: selection,
        ["three"]: selection,
        ["four"]: selection,
        ["five"]: selection
      });
    } //test for another else if when user hasn't pick first choice
    
     
    else if (targetId == "two" && selection == "Defer") {
      setCourse({
        ...course,
        [targetId]: selection,
        ["three"]: selection,
        ["four"]: selection,
        ["five"]: selection
      });
    } else if (targetId == "three" && selection == "Defer") {
      setCourse({
        ...course,
        [targetId]: selection,
        ["four"]: selection,
        ["five"]: selection
      });
    } else if (targetId == "four" && selection == "Defer") {
      setCourse({
        ...course,
        [targetId]: selection,
        ["five"]: selection
      });
    } else if (targetId == "five" && selection == "Defer") {
      setCourse({
        ...course,
        [targetId]: selection
      });
    } else {
      setCourse({
        ...course,
        [targetId]: selection
      });
    }
  }

  function unSelectedCourseList(list) {
    const courseSelectd = Object.values(course)
    return courseList.filter((select) => {
      return !courseSelectd.find((selectOption) => {
        return selectOption === select;
      });
    });
  }

  function handleInfoChange(event) {
    setStudentInfo({ ...studentInfo, [event.target.id]: event.target.value })
  }
  function handleSubmit(e) {
    
    e.preventDefault();

    axios.post('/user/createStudentInfo', {
      firstName: studentInfo.firstname,
      lastName: studentInfo.lastname,
      studentNo: studentInfo.studentid,
      bcitEmail: studentInfo.email,
      studentSet: studentInfo.set,
      firstChoice: course.one,
      secondChoice: course.two,
      thirdChoice: course.three,
      fourthChoice: course.four,
      fifthChoice: course.five,
      sixthChoice: course.six,
    })
      
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }


  return (
    
      <div className="App">
        <Header />
        <Banner />
        <NavBar />
        <Content />

        <form onSubmit={handleSubmit}>
          <Titles text={"Section 1: Student Information"} />
          <FormSelect studentInfo={studentInfo} handleInfoChange={handleInfoChange} error={error}
            />

          <Titles text={"Section 2: Option Selection"} />
          <div className="options">
            <Options id={1} state={course} number="First choice" choicesid="one" change={selectChanged} unSelectedCourseList={unSelectedCourseList}
            />
            <Options id={2} state={course} number="Second choice" choicesid="two" change={selectChanged} unSelectedCourseList={unSelectedCourseList}
            />
            <Options id={3} state={course} number="Third choice" choicesid="three" change={selectChanged} unSelectedCourseList={unSelectedCourseList}
            />
            <Options id={4} state={course} number="Fourth choice" choicesid="four" change={selectChanged} unSelectedCourseList={unSelectedCourseList}
            />
            <Options id={5} state={course} number="Fifth choice" choicesid="five" change={selectChanged} unSelectedCourseList={unSelectedCourseList}
            />
            <Options id={6} state={course} number="Sixth choice" choicesid="six" change={selectChanged} unSelectedCourseList={unSelectedCourseList}
            />
          </div>

          <button onClick={handleClear}>Reset options</button>
          <hr />
          <Buttons />
        </form>
        <Footer />
      </div>
    
  );
}
export default App;