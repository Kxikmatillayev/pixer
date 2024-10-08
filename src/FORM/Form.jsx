import React from 'react'
import cn from './form.module.css'

const Form = () => {
    return (
        <>
            <section className={cn.sect}>
                <div className={cn.topdiv}>
                    <h1>Leave your number and we'll call you back</h1>
                    <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                </div>
                <section className={cn.sect2}>
                    <input type="text" placeholder='Name' />
                    <div className={cn.line}></div>
                    <input type="text" placeholder='Phone number' />
                    <div className={cn.line}></div>
                    <input type="text" placeholder='Description' />
                    <div className={cn.line}></div>
                    <button>Send</button>
                    <span>We call back in 10-30 minutes, guaranteed!</span>
                </section>
            </section>
        </>
    )
}

export default Form
