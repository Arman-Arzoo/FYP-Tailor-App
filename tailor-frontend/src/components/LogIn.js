import React from 'react';
import UserContext from '../context/userContext';
import {useState,useContext} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';



const LogIn = () => {

  const [email ,setEmail] = useState();
  const [password ,setPassword] = useState();

  const {setUserData} = useContext(UserContext);
  const history = useHistory();

  const submit =async(e)=>{
    e.preventDefault();
    const logInUser = {email,password};
    const loginRes = await Axios.post("http://localhost:4000/users/login",logInUser);

   
    setUserData({
      token:loginRes.data.token,
      user:loginRes.data.user
    });
    localStorage.setItem("auth-token",loginRes.data.token);
    history.push("/")


  }


  return (
    <div>
       <form onSubmit={submit}>

<div className="form-control">
  <label htmlFor="name">UserName</label>
  <input type="text" id="username-login"placeholder="Enter User name or Email..." onChange={(e)=>setEmail(e.target.value)} required/>
</div>


<div className="form-control">
  <label htmlfor="password">Password</label>
  <input type="password"  id="password-login" placeholder="Enter Password..." onChange={(e)=>setPassword(e.target.value)} required/>
</div>




<button className="btn">Log IN</button>

</form>
    </div>
    )
}

export default LogIn