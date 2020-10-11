import React from 'react';
import UserContext from '../context/userContext';
import { useState, useContext } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import ErrorNotice from './misc/errorNotices';




const SignUp = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();


  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, passwordCheck, displayName };
      await Axios.post("http://localhost:4000/users/register", newUser);

      const loginRes = await Axios.post("http://localhost:4000/users/login", {
        email,
        password
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/")
    } catch (err) {

      err.response.data.msg && setError(err.response.data.msg);


    }


  }
  return (
    <div >
      <h2 className="text-center">Register An Account</h2>
      <div className="container-form">
        <h2>Create an Account</h2>

        {error && <ErrorNotice message={error} clearError={() => { setError(undefined) }} />}
        <form className="form" onSubmit={submit} >

          <div className="form-control">
            <label htmlFor="username-register">Email</label>
            <input type="email" id="username-register" placeholder="Enter Name..." onChange={(e) => setEmail(e.target.value)} />
          </div>


          <div className="form-control">
            <label htmlfor="password-register">Password</label>
            <input type="password" id="password-register" placeholder="Enter Password..." onChange={(e) => setPassword(e.target.value)} />
            <br />
            <label htmlfor="password-register">RePassword</label>
            <input type="password" id="password-check" placeholder="verify password..." onChange={(e) => setPasswordCheck(e.target.value)} />
          </div>



          <div className="form-control">
            <label htmlfor="displayName-register">Display Name</label>
            <input type="text" id="email-register" placeholder="Enter Display Name..." onChange={(e) => setDisplayName(e.target.value)} />
          </div>

          <input type="submit" value="Sign Up" />


        </form>



      </div>
    </div>
  )
}

export default SignUp