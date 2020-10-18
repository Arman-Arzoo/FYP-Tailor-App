import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../context/userContext'




const AuthOption = () => {
    let history = useHistory();
    const { userData, setUserData } = useContext(UserContext);

    const register = () => history.push("/signup");
    const login = () => history.push("/login");
    const logOut = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "")
    };

   

    return (

        <div className="headerLink" >
            {
                userData.user ? (
                    <>
                    <Link to="/profile" className="hhh">{userData.user.displayName}</Link>
                    <button onClick={logOut}> Log Out</button>
                    
                    </>

                ) :
                    (
                        <>
                            <button onClick={login}> Log In</button>
                            <button onClick={register}> Sign UP</button>
                        </>
                    )

            }


        </div>
    )

}

export default AuthOption