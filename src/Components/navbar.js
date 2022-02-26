import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <div className="navbar1">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" id="logo-header" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item active px-4"> */}
                        {/* <a className="nav-link text-white px-4" href="#Home">Home</a> */}

                            {/* <Link className="nav-link text-white px-4" to="Home">Home</Link> */}
                        {/* </li> */}
                        <li className="nav-item ">
                            <Link className="nav-link text-white px-4" to="About">About</Link>
                            {/* <a className="nav-link text-white px-4" href="#About">About</a> */}
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link text-white px-4" href="#Portofolio">Portofolio</a> */}
                            {/* <NavLink to='Portofolio'>Portofolio</NavLink> */}
                            <Link className="nav-link text-white px-4" to="Portofolio">Portofolio</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link text-white px-4" href="#ContactUs">Contact</a> */}
                            <Link className="nav-link text-white px-4" to='ContactUs'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar; 

