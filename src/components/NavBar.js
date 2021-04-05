import React from "react";


function NavBar() {
    return (
        <div className="NavBar">
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="">Program Updates</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Part-Time</a></li>
          <li><a href="">Full Time</a></li>
          <li><a href="/login">Admin</a></li>
          {localStorage.getItem('token') ? <li><a href="/logout">Logout</a></li> : <li></li>}
        </ul>
      </div>
    )

}

export default NavBar