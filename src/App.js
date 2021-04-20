import { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";
import './App.css';
import axios from 'axios';


//COMPONENTS
import Header from "./components/Header";
import Banner from "./components/Banner.js";
import NavBar from "./components/NavBar.js";
import Content from "./components/Content.js";
import Titles from "./components/Titles.js";
import Buttons from "./components/Buttons.js";
import Footer from "./components/Footer";



//import Select from './Select';
import FormSelect from "./components/Form";
import NewForm from "./components/NewForm";
import Options from "./components/Option";

const courseList = ["Web & Mobile", "AI & Machine", "Programming Paradigms", "Technical Programming", "Cloud Computing (DTC)", "Predictive Analytics (DTC)", "Defer"]
function App() {

  //state of priorities 
  const [selectionList, setSelectionList] = useState({
    "one": 7,
    "two": 7,
    "three": 7,
    "four": 7,
    "five": 7,
    "six": 7
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
    set: 'default',
    firstnameError: '',
    lastnameError: '',
    prefernameError: '',
    studentidError: '',
    emailError: '',
    setError:''
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
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: ''
  }

  const clearState = () => {
    setCourse({ ...initialState });
  }


  function handleClear(event) {
    event.preventDefault();
    clearState();
    setSelectionList({
      ...selectionList,
      "one": 7,
      "two": 7,
      "three": 7,
      "four": 7,
      "five": 7,
      "six": 7

    })
  }
  //function that grabs id of the selected coure
  function getSelectionId(targetId, selection) {
    console.log(selection)
    axios.get(`/user/getSelectionId/${selection}`)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.id)
        setSelectionList({ ...selectionList, [targetId]: response.data.id })
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

  // function which validate all the input fields

  function validate() {

    console.log("validate function called")
    let firstnameError = ''
    let lastnameError = ''
    let prefernameError = ''
    let studentidError = ''
    let emailError = ''
    let setError = ''

    let nameRegex = /[a-zA-z]{1,50}/g;
    let studentidRegex = /^A0[0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/g;
    let emailRegex = /^.+@my.bcit.ca|.+@bcit.ca$/;
    //let emailRegex = /^([a-z1-9]{1,}@my.bcit.ca)|([a-z1-9]{1,}@bcit.ca)$/g;

    if (!studentInfo.firstname.match(nameRegex) ||
      !studentInfo.lastname.match(nameRegex) ||
      !studentInfo.prefername.match(nameRegex) ||
      !studentInfo.studentid.match(studentidRegex) ||
      !studentInfo.email.match(emailRegex)) {

      if (!studentInfo.firstname.match(nameRegex)) {
        firstnameError = "Please enter the valid First Name!"
      }else{
        firstnameError = ""
      }
      if (!studentInfo.lastname.match(nameRegex)) {
        lastnameError = "please enter the valid Last Name!"
      }else{
        lastnameError = ""
      }
      if (!studentInfo.prefername.match(nameRegex)) {
        prefernameError = "Please enter the valid Prefered Name!"
      }else{
        prefernameError = ""
      }
      if (!studentInfo.studentid.match(studentidRegex)) {
        studentidError = "Please enter the valid Student ID!"
      }else{
        studentidError = ""
      }
      if (!studentInfo.email.match(emailRegex)) {
        emailError = "Please enter the valid BCIT Email!"
      }else{
        emailError = ""
      }

      if (studentInfo.set == 'default') {
        setError = "Please select your set"
      }else{
        setError = ""
      }


      setStudentInfo({
        ...studentInfo,
        firstnameError: firstnameError,
        lastnameError: lastnameError,
        prefernameError: prefernameError,
        studentidError: studentidError,
        emailError: emailError,
        setError:setError
      })

      return false
    }else{
      setStudentInfo({
        ...studentInfo,
        firstnameError: '',
        lastnameError: '',
        prefernameError: '',
        studentidError: '',
        emailError: '',
        setErrot:''
      })
      return true
    }
    
  }

  function handleSubmit(e) {

    e.preventDefault();

    let isValid = validate()
    if (isValid) {
      
      axios.post('/user/createStudentInfo', {
        firstName: studentInfo.firstname,
        lastName: studentInfo.lastname,
        studentNo: studentInfo.studentid,
        bcitEmail: studentInfo.email,
        studentSet: studentInfo.set,
        selectionList
      })

        .then((response) => {
          history.push("/confirmation");
          console.log(response);
        }, (error) => {
          console.log(error);
        });
    }
  }
  // button routing
  const history = useHistory();
  const onButtonClick = () => {

    history.push("/");

  }

  const onButtonClickForward = (e) => {

    handleSubmit(e);
    //history.push("/confirmation");

  }


  return (

    <div className="App">
      <Header />
      <Banner />
      <NavBar />
      <Content />

      <form onSubmit={handleSubmit}>
        <Titles text={"Section 1: Student Information"} />
        {/* <FormSelect studentInfo={studentInfo} handleInfoChange={handleInfoChange} error={error}
        /> */}

        <NewForm studentInfo={studentInfo} handleInfoChange={handleInfoChange} error={error}
        />

        <Titles text={"Section 2: Option Selection"} />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Acknowledgment*</b>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you do not select any choice, all will be defered</p>
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
        <div className="Buttons">
          <button onClick={onButtonClick} className="Button1">PREVIOUS</button>
          <button onClick={onButtonClickForward} type="submit" className="Button2">SUBMIT</button>
        </div>
      </form>
      <Footer />
    </div>

  );
}
export default App;