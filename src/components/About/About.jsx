import React from 'react';
import "./About.css";
import ME from '../../assets/me-about.jpeg'
import {FaGraduationCap} from "react-icons/fa"
import {FaAward} from "react-icons/fa"
// import {FaGraduationCap} from "react-icons/fa"

const About = () => {
  return (
    <>
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='contsiner about__container'>
        <div className='about__me'>
          <img src={ME} alt="" />
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaGraduationCap className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit vel perspiciatis harum voluptas vitae, temporibus eveniet neque, labore mollitia officia possimus! Cum enim quisquam assumenda quasi nisi debitis nam ab dolor, dolores repellat soluta! Et?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
    </>
    
  )
}

export default About;
