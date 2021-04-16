import React from "react";

const hrStyle = {
    width: "90%",
    marginLeft: "5%"
}

const redirectMyBCIT = () => {
    window.location.href = 'https://id.bcit.ca/my.policy';
}
const redirectBCIT = () => {
    window.location.href = 'https://id.bcit.ca/my.policy';
}

function ConfirmContent() {
    return (
        <div className="Static">
            <h1 className="header1">Congratulations, your selection has been submitted!</h1>

            <div className="InnerText">
                <p>Please wait patiently and check your email periodically for your response.</p>
                <p>We are working very hard to get your schedules as fast as possible.</p>
            </div>

            <hr style={hrStyle}></hr>

            <div className="Buttons">
                
                <button onClick={redirectMyBCIT} type="submit" className="Button2">Click here to go back to myBCIT</button>
                <button onClick={redirectBCIT} type="submit" className="Button2">Click here to go back to the D2L</button>
            </div>
        </div>
    )

}

export default ConfirmContent