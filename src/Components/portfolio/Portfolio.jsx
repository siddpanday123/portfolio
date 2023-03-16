import React from 'react'
import './portfolio.css'
import IMG from '../../assets/img.png'
  const data = [
    {
      id: 1,
      Image: IMG,
      title: 'E-commerce Commerce',
      github: "https://github.com/siddpanday123/",
      demo:"#"
    },
    {
      id: 1,
      Image: IMG,
      title: 'E-commerce Commerce',
      github: "https://github.com/siddpanday123/",
      demo:"#"
    },
    {
      id: 1,
      Image: IMG,
      title: 'E-commerce Commerce',
      github: "https://github.com/siddpanday123/",
      demo:"#"
    },
    {
      id: 1,
      Image: IMG,
      title: 'E-commerce Commerce',
      github: "https://github.com/siddpanday123/",
      demo:"#"
    },
    {
      id: 1,
      Image: IMG,
      title: 'E-commerce Commerce',
      github: "https://github.com/siddpanday123/",
      demo:"#"
    },
    {
      id: 1,
      Image: IMG,
      title: 'E-commerce Commerce',
      github: "https://github.com/siddpanday123/",
      demo:"#"
    },
  ]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        
        {
          data.map(({id, Image, title, github, demo})=>{
            return(
            <article key={id} className="portfolio_item">

          <div className="portfolio_item-image">
            <img src={Image} alt={title} />
          </div>

          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn-primary btn' target='_blank'>Live Demo</a>

          </div>
         
        </article>)
          })
        }
      </div>
    </section>
  )
}

export default Portfolio