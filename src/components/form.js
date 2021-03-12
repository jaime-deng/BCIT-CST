import React from 'react';
import useForm from "./UseForm";
import validateInfo from "../js/Validate";
//const FormSelect = ({ studentInfo, handleInfoChange,errors }) => {
    const FormSelect = () => {

const {handleInfoChange, studentInfo, handleSubmit, errors} = useForm(submit,validate);

    return (
        <div id="studid">
            <label htmlFor="name">Enter Your Legal First Name:</label>
            <input type="text"
                id="firstname"
                value={studentInfo.firstname || ''}
                className={`input ${errors.name && 'is-danger'}`}
                name="firstname"
                placeholder="Legal First Name"
                onChange={handleInfoChange}
                required
               // pattern="[A-Za-z]{1,50}"
               
                />
            {errors.firstname && (<p className="is-danger">{errors.firstname}</p>)}
            <label htmlFor="name">Enter Your Preferred Name:</label>
            <input
                type="text"
                id="prefername"
                value={studentInfo.prefername}
                value2={studentInfo.prefername}
                pattern="[A-Za-z]{1,50}"
                placeholder="Preferred Name"
                name="prefername"
                onChange={handleInfoChange}
                
                required/>
<div style={{ fontsize: 12, color: "red"}}>{studentInfo.nameError}</div>
            <label htmlFor="name">Enter Your Legal Last Name:</label>
            <input
                type="text"
                id="lastname"
                value={studentInfo.lastname}
                pattern="[A-Za-z]{1,50}"
                name="lastname"
                placeholder="Legal Last Name"
                onChange={handleInfoChange}
               
                required/>
<div style={{ fontsize: 12, color: "red"}}>{studentInfo.nameError}</div>
            <label htmlFor="name">Enter BCIT STUDENT ID:</label>
            <input
                type="text"
                id="studentid"
                value={studentInfo.studentid}
                value2={studentInfo.studentid}
                pattern="^A+\d*"
                size="20" minLength="9"
                placeholder="A0"
                name="studid"
                onChange={handleInfoChange}
                required/>
<div style={{ fontsize: 12, color: "red"}}>{studentInfo.idError}</div>
            <label htmlFor="email">Enter your @my.bcit.ca /@bcit.ca email:</label>
            <input
                type="text"
                id="email"
                value={studentInfo.email}
                value2={studentInfo.email}
                pattern=".+@my.bcit.ca|.+@bcit.ca"
                name="email"
                size="40"
                placeholder="JohnDoe@my.bcit.ca"
                onChange={handleInfoChange}
                required/>
<div style={{ fontsize: 12, color: "red"}}>{studentInfo.emailError}</div>
            <label htmlFor="set"> SET A,B,C,D,E,F,Co-op,Other:</label>
            <select
                name="set"
                id="set"
                value = {studentInfo.set}
                value2 = {studentInfo.set}
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
            <div style={{ fontsize: 12, color: "red"}}>{studentInfo.setError}</div>
        </div>
        
    )
}

export default FormSelect
