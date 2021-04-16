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
import ConfirmContent from "./components/ConfirmContent.js"


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
        flexDirection: "column",
        paddingLeft: "20px"
    };

    const checkboxContainer = {
        display: "flex",
        flexDirection: "row"
    };

    const button = {
        width: "100px"
    };

    const contentTopContainer = {
        paddingLeft: "20px"
    };

    const contentBottomContainer = {
        paddingLeft: "20px"
    };

    const hrStyle = {
        width:"90%",
        marginLeft: "5%"
        
    };

    return (
        <div className="Home">
            <Header />

            <Banner />

            <NavBar />

            < br />

            <ConfirmContent />
            <br />

            

            <br />
            <br />
            <br />
            <br />


            <Footer />
        </div>
        
    );
}