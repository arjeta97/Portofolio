import React from "react";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaFacebookF} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';


function Footer(){
    return(
        <div className="d-flex justify-content-center Footer">
        <p className="icon">
            <a href="https://www.linkedin.com/in/arjeta-allamani-861594194/"> <FaLinkedin/> </a>
            <a href="https://www.linkedin.com/in/arjeta-allamani-861594194/"> <FaGithubSquare/> </a>
            <a href="https://www.linkedin.com/in/arjeta-allamani-861594194/"> <FaFacebookF/>  </a>
            <a href="https://www.linkedin.com/in/arjeta-allamani-861594194/"> <FaInstagram/> </a>
        </p>
        <p>&copy; 2022 Arjeta Allamani</p>
        </div>
    ) 
};

export default Footer;