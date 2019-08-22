import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">

            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Todos
              </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/add">
               Add todo
              </Link>
           </li>

         </ul>
       </div>
  </nav>

  //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  //       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
  //       <span class="navbar-toggler-icon"></span>
  //       </button>

  // <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
  // <ul className="navbar-nav">
  
  //     <li className="nav-item">
  //       <Link className="nav-link" to="/">
  //          Todos
  //       </Link>
  //     </li>

  //     <li className="nav-item">
  //        <Link className="nav-link" to="/add">
  //          Add todo
  //        </Link>
  //      </li>

  //    </ul>
  //   {/* <form class="form-inline my-2 my-lg-0">
  //     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
  //     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  //   </form> */}
  // </div>
  //     </nav>
    )
  }
}

export default Navbar
