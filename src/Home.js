import React, { useRef, useEffect } from "react";

import { useHistory } from "react-router-dom";
import './App.css';
//COMPONENTS
import Header from "./components/Header"
import Banner from "./components/Banner.js"
import NavBar from "./components/NavBar.js"
import Content from "./components/Content.js"
import Titles from "./components/Titles.js"
import Buttons from "./components/Buttons.js"
import Footer from "./components/Footer"


export default function Home() {
    const history = useHistory();

    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        if (!inputEl.current.checked) {
            alert("Please check the box before continuing")
        } else {
            history.push("/select");
        };
    }
    const buttonStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };

    const buttonContainer = {
        display: "flex",
        flexDirection: "column"
    };

    const checkboxContainer = {
        display: "flex",
        flexDirection: "row"
    };

    const button = {
        width: "100px"
    };

    return (
        <div className="Home">
            <Header />

            <Banner />

            <NavBar />

            < br />

            <Content />
            <br />

            <Titles text={"Selection Criteria"} />

            <p>To be eligible to be placed in an Option that starts January 2021:
                <br></br>
                <br></br>
                <ol>
                <li>You must be enrolled in the full-time CST Diploma program <b>AND</b></li>
                <br></br>
                <br></br>
                <li>Have successfully completed all Level 1 and 2 CST courses (ie: all of first year) before December 16, 2020.</li>
                </ol>
                <br></br>
                <br></br>
                Note: PTS equivalent courses are accepted, as long as they are completed by December 16, 2020.</p>

            <Titles text={"Priority Listing"} />

            <p>Options are filled by highest GPA, students' preference selections and in the following order:</p>
            <p><b>Priority 1</b></p>
            <ol>
                <li>Returning Co-op students <b>AND</b></li>
                <br></br>
                <li>CST Level 2 students who successfully complete all the year 1 CST courses by end of their 2nd term.</li>
            </ol>
                <br></br>
            <p><b>Priority 2</b></p>
            <p>Cases outside of the priority one will be given lower priority. Including:</p>
                <br></br>
            <ul className="PriorityList">
                <li>CST students who were eligible to select an option in September 2020 but who decided to defer a term.</li>
                <li>CST students who completed all year 1 CST courses in more than 2 terms. These are typically students who 
                    drop or fail a level 1 or 2 course(s) and make it up in later terms and/or via PTS <b>AND</b></li>
                <li>Students who are currently not enrolled in CST, but wish to start or restart their studies via Advanced Placement.</li>
            </ul>
            <br></br>
            
            <p>The above is a non-exhaustive list.</p>
            <p>IMPORTANT: Options are subject to change or cancellation due to enrolment, and may run at either the DTC or BBY campus</p>

            <div style={buttonContainer}>
                <div style={checkboxContainer}>
                    <input style={buttonStyle} ref={inputEl} type="checkbox" />
                    <p>     I have read and understand the option selection process</p>
                </div>


                <button style={button} className="Button1" onClick={onButtonClick}>Next</button>
            </div>



            <Footer />



        </div>
    );
}