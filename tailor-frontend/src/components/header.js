import React from 'react';
import AuthOption from './authOption'
import {  Link } from "react-router-dom"


const Header = () => {

    return (
            
            <div className="header">
                <div className="headerLogo" >
                    < Link to='/'>Tailor App</Link>
                </div>
                <AuthOption/>


            </div>
           
    )

}

export default Header;