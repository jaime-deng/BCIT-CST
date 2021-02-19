import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';
//COMPONENTS
import Header from "./Header.js"
import Banner from "./Banner.js"
import NavBar from "./NavBar.js"
import Content from "./Content.js"
import Titles from "./Titles.js"
import Buttons from "./Buttons.js"
import Footer from "./Footer.js"

export default function Home() {
    return (
        <div className="App">
            <Header />

            <Banner />

            <NavBar />

            <Content />

            <Titles text={"Selection Criteria"} />

            <p>Lorem ipsum</p>

            <Titles text={"Priority Listing"} />

            <p> Lorem ipsum</p>

            <Buttons />

            <Footer />


            
        </div>
    );
}


