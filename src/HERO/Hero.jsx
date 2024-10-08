import React from 'react'
import sec from './hero.module.css'

const Hero = () => {
  return (
    <section className={`${sec.container} ${sec.section}`}>
      <div className={sec.div1}>
        <h1>Take your business to the next level take out</h1>
        <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
        <button className={sec.button}>Learn more</button>
      </div>

      <div className='vidyo'>
        <iframe width = '500px' height = '300px' src="https://www.youtube.com/embed/KLuTLF3x9sA" title="Norway 4K • Scenic Relaxation Film with Peaceful Relaxing Music and Nature Video Ultra HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  )
}

export default Hero