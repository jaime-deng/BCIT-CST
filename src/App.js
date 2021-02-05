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

      <div>
        <p>FORMS GO HERE</p>
      </div>

      <div className="Divider1">
        <h2 className="Divider1Text">Section 2: Option Selection</h2>
      </div>


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
