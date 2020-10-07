import React from 'react';



const SignUp = () => {
  return (
    <div>
      <h2>Create an Account</h2>
      <form >

        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="username-register" placeholder="Enter Name..."  required/>
        </div>


        <div className="form-control">
          <label htmlfor="password">Password</label>
          <input type="password" id="password-register" placeholder="Enter Password..." required/>
        </div>

        <div className="form-control">
          <label htmlfor="Email">Email</label>
          <input type="Email"  id="email  -register" placeholder="Enter Email..." required/>
        </div>


        <button className="btn">Sign Up</button>

      </form>



    </div>
  )
}

export default SignUp