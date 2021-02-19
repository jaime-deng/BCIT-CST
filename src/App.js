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
import FormSelect from "./components/form";
import Options from "./components/option";

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



  //unselect
  function unSelectedCourseList(list) {
    
    return courseList.filter((select) => {
      
        return !course.find((selectOption) => {
              return selectOption.selection === select && selectOption.list !== list;
              });
    });
  }
  
//   function unSelectedCourseList(list) {
    
//     return courseList.filter((select) => {
//       console.log(select)
//       if(select == "Defer") {
//         return !course.find((selectOption) => {
          
//           //console.log(selectOption.selection)
//               return selectOption.selection === select && selectOption.list !== list;
              
//               });
//       }
      
//             return course.find((selectOption) => {
//               console.log(selectOption)
//               console.log(selectOption.selection)
//                   return selectOption.selection === select && selectOption.list !== list;
                  
//                   });
//   });
  
// }
  
 
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
      <Options number="First choice" choicesid="one" change={selectChanged} unSelectedCourseList={unSelectedCourseList}/>
      <Options number="Second choice" choicesid="two" change={selectChanged} unSelectedCourseList={unSelectedCourseList}/>
      <Options number="Third choice" choicesid="three" change={selectChanged} unSelectedCourseList={unSelectedCourseList}/>
      <Options number="Fourth choice" choicesid="four" change={selectChanged} unSelectedCourseList={unSelectedCourseList}/>
      <Options number="Fifth choice" choicesid="five" change={selectChanged} unSelectedCourseList={unSelectedCourseList}/>
      <Options number="Sixth choice" choicesid="six" change={selectChanged} unSelectedCourseList={unSelectedCourseList}/>
      
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
