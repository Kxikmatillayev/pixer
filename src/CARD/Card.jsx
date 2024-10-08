import React from 'react'
import crd from './card.module.css'

export const Card = ({img, text}) => {
  return (
    <div className={crd.control}>
        <div>
            <span>{text}</span>
            <img src={img} alt="" />
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Ut enim ad minim veniam, quis </p>

        <button>View more</button>
    </div>
  )
}
