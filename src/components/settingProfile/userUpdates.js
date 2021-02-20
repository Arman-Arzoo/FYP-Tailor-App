import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";



const UserUpdates = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();




  return (
    <div>


      <div className="container-form form-group">
        <h2 className="text-center">💻  Create an Account</h2>


        <form className="form"  >

          <div className="">
            <label htmlFor="username-email">📧  Email</label>
            <input type="email" id="username-email" placeholder="Enter Name..." onChange={(e) => setEmail(e.target.value)} />
          </div>


          <div className="">
            <label htmlFor="Phone">Phone Number</label>
            <input type="text" id="password-register" placeholder="Enter Password..." onChange={(e) => setPassword(e.target.value)} />
            <br />
            <label htmlFor="gender">Gender</label>
            <input type="text" id="gender" placeholder="verify password..." onChange={(e) => setPasswordCheck(e.target.value)} />
          </div>

          <div className="">
            <label htmlFor="displayName-register">Display Name</label>
            <input type="text" id="display-register" placeholder="Enter Display Name..." onChange={(e) => setDisplayName(e.target.value)} />
          </div>

          <input type="submit" value="Sign Up" />


        </form>



      </div>


    </div>
  )
}

export default UserUpdates;