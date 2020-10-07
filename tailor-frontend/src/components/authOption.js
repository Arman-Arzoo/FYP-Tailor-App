import React from 'react';
import { Link } from "react-router-dom";



const AuthOption = () => {
    return (

        <div className="headerLink" >
            < Link to='/login'>Log In</Link>
            < Link to='/signup'>Sign Up</Link>
        </div>
    )

}

export default AuthOption