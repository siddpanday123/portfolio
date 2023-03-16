import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';



const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com"  rel="noreferrer" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com"  rel="noreferrer" target='_blank'><BsGithub/></a>
        <a href="https://facebook.com"  rel="noreferrer" target='_blank'><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocials