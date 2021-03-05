import React from 'react';

const FormSelect = ({ studentInfo, handleInfoChange }) => {

    return (
        <div id="studid">
            <label htmlFor="name">Enter Your Legal First Name:</label>
            <input type="text"
                id="firstname"
                value={studentInfo.firstname}
                
                //maxLength="50"
                placeholder="Legal First Name"
                onChange={handleInfoChange}
                required
                pattern="[A-Za-z]{1,50}"
               
                />

            <label htmlFor="name">Enter Your Preferred Name:</label>
            <input
                type="text"
                id="prefername"
                value={studentInfo.prefername}
                pattern="[A-Za-z]{1,50}"
                placeholder="Preferred Name"
                onChange={handleInfoChange}
                
                required/>

            <label htmlFor="name">Enter Your Legal Last Name:</label>
            <input
                type="text"
                id="lastname"
                value={studentInfo.lastname}
                pattern="[A-Za-z]{1,50}"
                
                placeholder="Legal Last Name"
                onChange={handleInfoChange}
               
                required/>

            <label htmlFor="name">Enter BCIT STUDENT ID:</label>
            <input
                type="text"
                id="studentid"
                value={studentInfo.studentid}
                pattern="^A+\d*"
                size="20" minLength="9"
                placeholder="A0"
                onChange={handleInfoChange}
                required/>

            <label htmlFor="email">Enter your @my.bcit.ca /@bcit.ca email:</label>
            <input
                type="text"
                id="email"
                value={studentInfo.email}
                pattern=".+@my.bcit.ca|.+@bcit.ca"
                
                size="40"
                placeholder="JohnDoe@my.bcit.ca"
                onChange={handleInfoChange}
                required/>

            <label htmlFor="set"> SET A,B,C,D,E,F,Co-op,Other:</label>
            <select
                name="set"
                id="set"
                value = {studentInfo.set}
                onChange={handleInfoChange}>
                <option value="A" >A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="X">Co-op</option>
                <option value="Other">Other</option>
            </select>
        </div>
    )
}

export default FormSelect
