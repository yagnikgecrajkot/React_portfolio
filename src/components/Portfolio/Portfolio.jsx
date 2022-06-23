import React from 'react';
import "./Portfolio.css";
import IMG1 from '../../assets/portfolio1.jpeg';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.jpeg';
import IMG4 from '../../assets/portfolio4.jpeg';


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'this is title',
    github: 'https://github.com/yagnikgecrajkot/Digital_Clock_with_Date',
    demo: 'http://yagnikgecrajkot.github.io/Digital_Clock_with_Date/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'this is title',
    github: 'https://github.com/yagnikgecrajkot/Fashion',
    demo: 'https://yagnikgecrajkot.github.io/Fashion/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'this is title',
    github: 'https://github.com/yagnikgecrajkot/Loding_Page',
    demo: 'https://yagnikgecrajkot.github.io/Loding_Page/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'this is title',
    github: 'https://github.com/yagnikgecrajkot/Car_Animation',
    demo: 'https://yagnikgecrajkot.github.io/Car_Animation/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-img">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>

                <div className="portfolio__item-cta">
                  <a href={github} target="_blank" className='btn'>Github</a>
                  <a href={demo} target="_blank" className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }



      </div>
    </section>
  )
}

export default Portfolio;