import React from 'react';
import "./Footer.css";
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>YAGNIK</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://github.com"><BsGithub /></a>
        <a href="https://linkedin.com"><BsLinkedin /></a>
        <a href="https://instagran.com"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; YAGNIK KANSAGRA. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;