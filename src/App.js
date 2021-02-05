import logo from './BCIT_LOGO.png';
import keyboard_logo from "./keyboard.jpeg"
import './App.css';

function App() {
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
<label for="name">Enter Your Legal First Name:</label>
        <input type="name" id="legal"
       pattern="[A-Z][a-z]" size="120" placeholder="Legal First Name" required></input>

<label for="name">Enter Your Prefer Name:</label>
        <input type="name" id="prefer"
       pattern="[A-Z][a-z]" size="120" placeholder="Prefer Name" required></input>

<label for="name">Enter Your Prefer Name:</label>
        <input type="name" id="prefer"
       pattern="[A-Z][a-z]" size="120" placeholder="Prefer Name" required></input>

<label for="name">Enter Your Legal Last Name:</label>
        <input type="name" id="last"
       pattern="[A-Z][a-z]" size="120" placeholder="Legal Last Name" required></input>

<label for="name">Enter BCIT STUDENT ID:</label>
        <input type="student" id="student"
       pattern="^A+\d*" size="9" minlength="9" placeholder="A0" required></input>

<label for="email">Enter your @my.bcit.ca /@bcit.ca email:</label>
        <input type="email" id="email"
       pattern=".+@my.bcit.ca | .+@bcit.ca" size="100" placeholder="JohnDoe@my.bcit.ca" required></input>

<label for="set"> SET A,B,C,D,E,F,X,O:</label>
        <input type="set" id="set"
       pattern="^A|B|C|D|E|F|X|O" size="1" maxlength="1" placeholder="E" required></input>

<label for="set"> SET A,B,C,D,E,F,X,O:</label>
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
      <form>
    <label for="set"> First Choice:</label>
       <select name="one" id="one">
         <option value="select">Please Select</option>
        <option value="web">Web & Mobile</option>
        <option value="ai">AI & Machine</option>
        <option value="program">Programming Paradigms</option>
        <option value="technical">Technical Programming</option>
        <option value="cloud">Cloud Computing (DTC)</option>
        <option value="predict">Predictive Analytics (DTC)</option>
        <option value="defer">Defer</option>
       
      </select>

      <label for="set"> Second Choice:</label>
       <select name="two" id="two">
         <option value="select">Please Select</option>
        <option value="web">Web & Mobile</option>
        <option value="ai">AI & Machine</option>
        <option value="program">Programming Paradigms</option>
        <option value="technical">Technical Programming</option>
        <option value="cloud">Cloud Computing (DTC)</option>
        <option value="predict">Predictive Analytics (DTC)</option>
        <option value="defer">Defer</option>
       
      </select>

      <label for="set"> Third Choice:</label>
       <select name="three" id="three">
         <option value="select">Please Select</option>
        <option value="web">Web & Mobile</option>
        <option value="ai">AI & Machine</option>
        <option value="program">Programming Paradigms</option>
        <option value="technical">Technical Programming</option>
        <option value="cloud">Cloud Computing (DTC)</option>
        <option value="predict">Predictive Analytics (DTC)</option>
        <option value="defer">Defer</option>
       
      </select>

      <label for="set"> Fourth Choice:</label>
       <select name="four" id="four">
         <option value="select">Please Select</option>
        <option value="web">Web & Mobile</option>
        <option value="ai">AI & Machine</option>
        <option value="program">Programming Paradigms</option>
        <option value="technical">Technical Programming</option>
        <option value="cloud">Cloud Computing (DTC)</option>
        <option value="predict">Predictive Analytics (DTC)</option>
        <option value="defer">Defer</option>
       
      </select>

      <label for="set"> Fifth Choice:</label>
       <select name="five" id="five">
         <option value="select">Please Select</option>
        <option value="web">Web & Mobile</option>
        <option value="ai">AI & Machine</option>
        <option value="program">Programming Paradigms</option>
        <option value="technical">Technical Programming</option>
        <option value="cloud">Cloud Computing (DTC)</option>
        <option value="predict">Predictive Analytics (DTC)</option>
        <option value="defer">Defer</option>
       
      </select>

      <label for="set"> Sixth Choice:</label>
       <select name="six" id="six">
         <option value="select">Please Select</option>
        <option value="web">Web & Mobile</option>
        <option value="ai">AI & Machine</option>
        <option value="program">Programming Paradigms</option>
        <option value="technical">Technical Programming</option>
        <option value="cloud">Cloud Computing (DTC)</option>
        <option value="predict">Predictive Analytics (DTC)</option>
        <option value="defer">Defer</option>
       
      </select>

      
    </form>

      <div>
        <p>FORMS GO HERE</p>
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
