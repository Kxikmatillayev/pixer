import React from 'react'
import cn from './infarmation.module.css'

const Infarmation = ({img}) => {
    return (
        <section className={`${cn.card} ${cn.container}`}>
            <img src={img} alt="" />

            <div>
                <h1>Let's clarify the requirements</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </section>
    )
}

export default Infarmation