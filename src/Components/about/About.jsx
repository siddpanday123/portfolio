import React from 'react'
import './about.css'
import ME from '../../assets/main.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='me' />

          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>
                Experience
              </h5>
              <small>
                2+ Year Working
              </small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>
                Client
              </h5>
              <small>
                200+ Worldwide
              </small>
            </article>
            <article className='about_card'>
              <VscFolderOpened className='about_icon'/>
              <h5>
                Projects
              </h5>
              <small>
                60+ Completed
              </small>
            </article>
          </div>
          <div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quibusdam minima quae culpa vero enim excepturi minus, pariatur nihil sunt iste veritatis labore. Suscipit deserunt iste eos maiores dolores iusto libero excepturi dolore aliquid provident maxime, dolorem cum qui facilis praesentium distinctio. Harum necessitatibus ab itaque ut atque esse voluptates recusandae! Neque cumque .
            </p>

            <a href="#contact" className='btn btn-primary' > Let's Talk</a>
          </div>
        </div>


      </div>
    
    
    </section>
  )
}

export default About;