import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';


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
import FormSelect from "./components/Form";
import Options from "./components/Option";

const courseList = ["Web & Mobile","AI & Machine", "Programming Paradigms","Technical Programming","Cloud Computing (DTC)","Predictive Analytics (DTC)", "Defer"]
const noCourse = ["Defer"];
function App() {
  
// state of the array of course list
  const [course, setCourse] = useState([]);
  //when change occur will target the select and update the setCourse
  function selectChanged(event) {
    const targetId = event.target.id;
    const selection = event.target.value;
    setCourse([...course, { selection, list: targetId }]);
    
  }
//possible to improve by using useEffect
  function containsDefer() {
    return !!course.find(c => c.selection == "Defer")
    
  }

  
console.log(!!course.find(c => c.selection == "Defer"))
  //unselect
  function unSelectedCourseList(list) {
    console.log(course)
    return courseList.filter((select) => {
      
        return !course.find((selectOption) => {
              return selectOption.selection === select && selectOption.list !== list;
              });
    });
    
  }
  

  
 
  return (
    <Router>
    <div className="App">
      <Header />

      <Banner />

      <NavBar />

      <Content />

      <Titles text={"Section 1: Student Information"} />



    <form>
      <FormSelect />
      </form>

      <Titles text={"Section 2: Option Selection"} />
    

<div className="options">
      
      <form>
      <Options number="First choice" choicesid="one" change={selectChanged} unSelectedCourseList={unSelectedCourseList}
      />
      <Options number="Second choice" choicesid="two" change={selectChanged} unSelectedCourseList={unSelectedCourseList}
      disabled={containsDefer()}/>
      <Options number="Third choice" choicesid="three" change={selectChanged} unSelectedCourseList={unSelectedCourseList} disabled={containsDefer()} />
      <Options number="Fourth choice" choicesid="four" change={selectChanged} unSelectedCourseList={unSelectedCourseList}
      disabled={containsDefer()}/>
      <Options number="Fifth choice" choicesid="five" change={selectChanged} unSelectedCourseList={unSelectedCourseList}
      disabled={containsDefer()}/>
      <Options number="Sixth choice" choicesid="six" change={selectChanged} unSelectedCourseList={unSelectedCourseList}
      disabled={containsDefer()}/>
      
    </form>
      </div>
     
      <hr />

        <Buttons />
        



      <Footer />

    </div>
    
    </Router>
  );
}

export default App;
