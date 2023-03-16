import React from 'react';
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi';
import {BiUserPin} from 'react-icons/bi';
import {BsBook} from 'react-icons/bs';
import {MdMiscellaneousServices} from 'react-icons/md';
import {MdContacts} from 'react-icons/md'
import { useState } from 'react';


const Nav = () => {

  const [activeNav, setActiveNav] =  useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ""}><BiHomeAlt/></a>
      <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ?  'active' : ''}><BiUserPin/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ?  'active' : ''}><BsBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')}  className={activeNav === '#services' ?  'active' : ''}><MdMiscellaneousServices/></a>
      <a href="#contact"  onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ?  'active' : ''}><MdContacts/></a>

    </nav>
  )
}

export default Nav