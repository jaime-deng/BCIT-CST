import logo from './BCIT_LOGO.png';
import keyboard_logo from "./keyboard.jpeg";
import {useState} from "react";
import './App.css';
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
      <Options number="First choice" choicesid="one" change={selectChanged} unSelectedCourseList={unSelectedCourseList}/>
      <Options number="Second choice" choicesid="two" change={selectChanged} unSelectedCourseList={unSelectedCourseList}/>
      <Options number="Third choice" choicesid="three" change={selectChanged} unSelectedCourseList={unSelectedCourseList}/>
      <Options number="Fourth choice" choicesid="four" change={selectChanged} unSelectedCourseList={unSelectedCourseList}/>
      <Options number="Fifth choice" choicesid="five" change={selectChanged} unSelectedCourseList={unSelectedCourseList}/>
      <Options number="Sixth choice" choicesid="six" change={selectChanged} unSelectedCourseList={unSelectedCourseList}/>
      
    </form>
      </div>
     
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
