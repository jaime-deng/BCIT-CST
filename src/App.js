import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import axios from 'axios';


//COMPONENTS
import Header from "./components/header"
import Banner from "./components/Banner.js"
import NavBar from "./components/NavBar.js"
import Content from "./components/Content.js"
import Titles from "./components/Titles.js"
import Buttons from "./components/Buttons.js"
import Footer from "./components/footer"

import Home from "./components/Home.js"


//import Select from './Select';
import FormSelect from "./components/form";
import Options from "./components/option"

const courseList = ["Web & Mobile", "AI & Machine", "Programming Paradigms", "Technical Programming", "Cloud Computing (DTC)", "Predictive Analytics (DTC)", "Defer"]
function App() {

  const [selectionList, setSelectionList] = useState({
    "one": 0,
    "two": 0,
    "three": 0,
    "four": 0,
    "five": 0,
    "six": 0
  });
  // state of the array of course list
  const [course, setCourse] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: ''
  });

  const [studentInfo, setStudentInfo] = useState({
    firstname: '',
    lastname: '',
    prefername: '',
    studentid: '',
    email: '',
    set: 'A'
  })

  function getSelectionId(targetId, selection){
    console.log(selection)
    axios.get(`/user/getSelectionId/${selection}`)
    .then(function (response) {
      console.log(response.data);
      console.log(response.data.id)
      setSelectionList({...selectionList, [targetId] : response.data.id})
      console.log(selectionList);
    })
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
    } else if (targetId == "two" && selection == "Defer") {
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

    getSelectionId(targetId, selection)
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
    e.preventDefault()

    axios.post('/user/createStudentInfo', {
      firstName: studentInfo.firstname,
      lastName: studentInfo.lastname,
      studentNo: studentInfo.studentid,
      bcitEmail: studentInfo.email,
      studentSet: studentInfo.set,
      selectionList : selectionList
    })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }


  return (
    <Router>
      <div className="App">
        <Header />
        <Banner />
        <NavBar />
        <Content />

        <form onSubmit={handleSubmit}>
          <Titles text={"Section 1: Student Information"} />
          <FormSelect studentInfo={studentInfo} handleInfoChange={handleInfoChange} />

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
          <hr />
          <Buttons />
        </form>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
