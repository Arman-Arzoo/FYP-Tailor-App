import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from "react-router-dom"


const Footer = () => {

    return (

        <footer>
            <section class="ft-legal">
                <ul class="ft-legal-list">
                    <li><Link to="#">Terms &amp; Conditions</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li>&copy; 2020 Copyright Tailor App.</li>
                </ul>
            </section>
        </footer>

    )

}

export default Footer;