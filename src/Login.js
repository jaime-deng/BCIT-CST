import { useState } from "react";
import './App.css';
//COMPONENTS
import Header from "./components/Header"
import Banner from "./components/Banner.js"
import NavBar from "./components/NavBar.js"

import Footer from "./components/Footer"
import download from 'js-file-download'

import axios from "axios";


export default function Login() {

    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    })

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    
    function handleChange(e) {

        setLoginDetails({
            ...loginDetails,
            [e.target.id]: e.target.value
        })
    }
    
    function handleLogin(e) {

        e.preventDefault();

        axios.post('/auth/login', loginDetails)
    
            .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token);
                console.log(localStorage.getItem('token'))
                setIsAuthenticated(true)
            }, (error) => {
                console.log(error);
            });
    }

    // According to the standards, the client should send token to the server via the 
    //HTTP request in a header called Authorization with the form Bearer [JWT_TOKEN].

    function handleClick(){
        const config = {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }

        axios.get('/admin/readDataAsCsv', config)
        .then(res => {
            download(res.data, 'studentInfo.csv')
            console.log(res)
        }, (error) => {
            console.log(error)
        })
    }

    return (
        <div className="Home">
            <Header />

            <Banner />

            <NavBar />
            {
                !localStorage.getItem('token') ? 
                    <form className="login" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="name">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={loginDetails.username}
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="name">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={loginDetails.password}
                        placeholder="password"
                        onChange={handleChange}
                        required />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
                 : 
                    <div>
                        <button type="button" onClick={handleClick} className="csv-button">Get CSV</button>
                    </div>
                
            }
            
            <Footer />
        </div>
    );
}