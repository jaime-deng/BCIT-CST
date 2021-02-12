import React from 'react'

const FormSelect = () => {
    return (
        <div>
            <label htmlFor="name">Enter Your Legal First Name:</label>
        <input type="name" id="legal"
       pattern="[A-Z][a-z]" size="120" placeholder="Legal First Name" required></input>

<label htmlFor="name">Enter Your Prefer Name:</label>
        <input type="name" id="prefer"
       pattern="[A-Z][a-z]" size="120" placeholder="Prefer Name" required></input>



<label htmlFor="name">Enter Your Legal Last Name:</label>
        <input type="name" id="last"
       pattern="[A-Z][a-z]" size="120" placeholder="Legal Last Name" required></input>

<label htmlFor="name">Enter BCIT STUDENT ID:</label>
        <input type="student" id="student"
       pattern="^A+\d*" size="9" minLength="9" placeholder="A0" required></input>

<label htmlFor="email">Enter your @my.bcit.ca /@bcit.ca email:</label>
        <input type="email" id="email"
       pattern=".+@my.bcit.ca | .+@bcit.ca" size="100" placeholder="JohnDoe@my.bcit.ca" required></input>

<label htmlFor="set"> SET A,B,C,D,E,F,X,O:</label>
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
        </div>
    )
}

export default FormSelect
