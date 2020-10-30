import React from 'react';
import UserContext from '../context/userContext';
import { useState, useContext } from 'react';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import ErrorNotice from './misc/errorNotices';

const LogIn = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const logInUser = { email, password };
      const loginRes = await Axios.post("http://localhost:4000/users/login", logInUser);

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/profile");

    }
    catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  }


  return (

    <div>
      <br/>
      <br/>
      <br/>
      
      <div className="container-form ">
        <h2 className="text-center">  😻  LOG IN</h2>
        {error && <ErrorNotice message={error} clearError={() => { setError(undefined) }} />}

        <form className='form' onSubmit={submit}>

          <div className="">
            <label htmlFor="name">📧  Email</label>
            <input  type="text" id="username-login" placeholder="Enter User name or Email..." onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="">
            <label htmlFor="password">🔑  Password</label>
            <input type="password" id="password-login" placeholder="Enter Password..." onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="Already-account" >
          <Link to="/signup">Already have an account</Link>
          </div>
          <input type="submit" value="Login" />
          
        </form>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      
    </div>
    
  )
}

export default LogIn