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
        }else {
            history.push("/select");
        };
    }


    return (
        <div className="Home">
            <Header />

            <Banner />

            <NavBar />

            <Content />

            <Titles text={"Selection Criteria"} />

            <p>Lorem ipsum</p>

            <Titles text={"Priority Listing"} />

            <p> Lorem ipsum</p>

            <div>
                <input ref={inputEl} type="checkbox" />
                <button onClick={onButtonClick}>Next</button>
            </div>



            <Footer />



        </div>
    );
}