import React from 'react';

const NewForm = ({ studentInfo, handleInfoChange, error }) => {

    return (
        <div id="studid">
            <label htmlFor="name">Enter Your Legal First Name:</label>
            <div>
                <input type="text"
                    id="firstname"
                    value={studentInfo.firstname}
                    name="firstname"
                    placeholder="Legal First Name"
                    onChange={handleInfoChange}
                />

                <div className="error">{studentInfo.firstnameError}</div>
            </div>


            <label htmlFor="name">Enter Your Preferred Name:</label>
            <div>
                <input
                    type="text"
                    id="prefername"
                    value={studentInfo.prefername}
                    placeholder="Preferred Name"
                    onChange={handleInfoChange}
                />
                <div className="error">{studentInfo.prefernameError}</div>
            </div>

            <label htmlFor="name">Enter Your Legal Last Name:</label>
            <div>
                <input
                    type="text"
                    id="lastname"
                    value={studentInfo.lastname}
                    placeholder="Legal Last Name"
                    onChange={handleInfoChange}
                />
                <div className="error">{studentInfo.lastnameError}</div>
            </div>

            <label htmlFor="name">Enter BCIT STUDENT ID:</label>
            <div>
                <input
                    type="text"
                    id="studentid"
                    value={studentInfo.studentid}
                    placeholder="A0"
                    onChange={handleInfoChange}
                />
                <div className="error">{studentInfo.studentidError}</div>
            </div>

            <label htmlFor="email">Enter your @my.bcit.ca /@bcit.ca email:</label>
            <div>
                <input
                    type="text"
                    id="email"
                    value={studentInfo.email}
                    placeholder="JohnDoe@my.bcit.ca"
                    onChange={handleInfoChange}
                />
                <div className="error">{studentInfo.emailError}</div>
            </div>

            <label htmlFor="set"> SET A,B,C,D,E,F,Co-op,Other:</label>
            <select
                name="set"
                id="set"
                value={studentInfo.set}
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

export default NewForm