import React from 'react'
import cn from './header.module.css'
import burger from '/public/burger.png'

const Header = () => {
  return (
    <header className={`${cn.header} ${cn.container}`}>
      <div>
        <h1>Pixer</h1>

        <ul>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Contacts</li>
        </ul>
      </div>

      <a href="tel:2395550108"><button>(239) 555-0108</button></a>

      <img src={burger} alt="Menu" width={30} height={30}/>
    </header>
  )
}

export default Header