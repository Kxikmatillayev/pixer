import React from 'react'
import Hero from '../HERO/Hero'
import { Card } from '../CARD/Card'
import main from './main.module.css'
import img1 from '/public/01.png'
import img2 from '/public/02.png'
import img3 from '/public/03.png'
import logo from '/public/card.png'
import Help from '../HELP/Help'
import Form from '../FORM/Form'
import Footer from '../FOOTER/Footer'

export const Main = () => {
  return (
    <main>
      <Hero />

      <section className={`${main.crd} ${main.container}`}>
        <div>
          <h1>How can we help you?</h1>
        </div>
        <div className={`${main.crdd}`}>
          <Card img={img3} text={'Web Designer'} />
          <Card img={img1} text={'SMM'} />
          <Card img={img2} text={'Branding'} />
          <Card img={logo} text={'Graphic design'} />
          <Card img={img3} text={'Developer'} />
        </div>
      </section>
      <Help />
      <Form />
    </main>
  )
}

export default Main