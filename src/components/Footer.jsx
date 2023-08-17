

import React from "react";
import { AiFillGithub,AiFillInstagram,AiFillLinkedin } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <div>
        <h1>LearnStart.Co</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://github.com/Vikaskumardane/" target={"blank"}>
           < AiFillGithub /> 
          </a>
          <a href="https://www.linkedin.com/m/in/vikaskumar-dane" target={"blank"}>
{/* LinkedIn     */}
<AiFillLinkedin />
      </a>
          <a href="https://www.instagram.com/i_vikasdane/" target={"blank"}>
          {/* Instagram */}
          <AiFillInstagram />
            
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;