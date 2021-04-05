import React from "react";
import {useHistory} from 'react-router-dom';

function NavBar() {
  const history = useHistory();

  function handleClick(){
    localStorage.removeItem('token')
    history.push("/logout")
  }
    return (
        <div className="NavBar">
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="">Program Updates</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Part-Time</a></li>
          <li><a href="">Full Time</a></li>
          <li><a href="/login">Admin</a></li>
          {localStorage.getItem('token') ? <li><button type="button" className="logout-button" onClick={handleClick}>Logout</button></li> : <li></li>}
        </ul>
      </div>
    )

}

export default NavBar