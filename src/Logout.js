import { useState,useEffect } from "react";
import './App.css';
//COMPONENTS
import Header from "./components/Header"
import Banner from "./components/Banner.js"
import NavBar from "./components/NavBar.js"

import Footer from "./components/Footer"

import axios from "axios";


export default function Logout() {

    return (
        <div className="Home">
            <Header />

            <Banner />

            <NavBar />
            
                <div>You are successfully logged out!</div> 

            <Footer />
        </div>
    );
}