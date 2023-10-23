import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class MenuRutasCollatz extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" 
                            to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hospitales
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">La Paz</a></li>
            <li><a className="dropdown-item" href="#">Gregorio Marañon</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Las cruces</a></li>
          </ul>
        </li>                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/collatz/14">
                                Collatz 14
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/collatz/21">
                                Collatz 21
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tabla/5">
                                Tabla 5
                            </NavLink>
                        </li>                        
                    </ul>
                    </div>
                    </div>
                </nav>            
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/collatz/14">Collatz 14</NavLink>
                </li>
                <li>
                    <NavLink to="/collatz/21">Collatz 21</NavLink>
                </li>                
                <li>
                    <NavLink to="/collatz/5">Collatz 5</NavLink>
                </li>                
                <li>
                    <NavLink to="/tabla/14">Tabla 14</NavLink>
                </li>
            </ul>  
        </div>
    )
  }
}
