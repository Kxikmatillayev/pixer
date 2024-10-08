import React from 'react'
import cn from './help.module.css'
import Infarmation from '../INFARMATION/Infarmation'
import img1 from '/public/people.png'
import img2 from '/public/box2.png'
import img3 from '/public/box.png'

const Help = () => {
  return (
    <>
      <div className={cn.parag}>
        <h1>
          How do we work?
        </h1>
        <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
      </div>
      <Infarmation img={img1} />
      <Infarmation img={img2}/>
      <Infarmation img={img3}/>
    </>
  )
}

export default Help
