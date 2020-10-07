import React from 'react';



const LogIn = () => {
  return (
    <div>
       <form >

<div className="form-control">
  <label htmlFor="name">UserName</label>
  <input type="text" id="username-register"placeholder="Enter User name or Email..."  required/>
</div>


<div className="form-control">
  <label htmlfor="password">Password</label>
  <input type="password"  id="password-register" placeholder="Enter Password..." required/>
</div>




<button className="btn">Log IN</button>

</form>
    </div>
    )
}

export default LogIn