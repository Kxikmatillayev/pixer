import React from 'react'
import cn from './footer.module.css'

const Footer = () => {
    return (
        <footer>
            <section className={cn.footer_top}>
                <ul>
                    <li>Services</li>
                    <li>SMM</li>
                    <li>Web development</li>
                    <li>Mobile apps</li>
                    <li>Branding</li>
                    <li>Graphic design</li>
                </ul>
                <ul>
                    <li>Resources</li>
                    <li>About us</li>
                    <li>Showcase</li>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>Connect with us</li>
                    <li>(239) 555-0108</li>
                    <li>hello@pixer.com</li>
                    <li>4140 Parker Rd. Allentown, New Mexico 31134</li>
                    <div className={cn.icons}>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </ul>
            </section>
            <div className={cn.line}></div>
            <section className={cn.footer_buttom}>
                <h1>Pixer</h1>
                <span>Copyright © 2022 Pixer</span>
            </section>
        </footer>


    )
}

export default Footer
