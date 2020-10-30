import React, { useContext } from 'react'
import { Link, Route, useHistory } from 'react-router-dom';
import UserContext from '../context/userContext';
import Setting from './setting';
import UserUpdates from './settingProfile/testing';
import UserUpdate from './settingProfile/userUpdate';



const Profile = () => {

    const { userData } = useContext(UserContext);
    const history = useHistory();
    const name = ((userData || {}).user || {}).displayName;

    return (

        <div className="">
             <div className="main_container">
      <div className="sidebar">
          <div className="sidebar__inner">
            <div className="profile">
              <div className="img">
                <img src="arman.PNG" alt="profile_pic"></img>
              </div>
              <div className="profile_info">
                 <p>Welcome</p>
    <p className="profile_name">{name}</p>
              </div>
            </div>
            <ul>
              <li>
                <Link to="/profile/dashboard" className="active">
                  <span class="icon"><i class="fas fa-dice-d6"></i></span>
                  <span class="title">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/profile/forms">
                  <span className="icon"><i class="fab fa-delicious"></i></span>
                  <span className="title">Forms</span>
                </Link>
              </li>
              <li>
                <Link to="profile/uielment">
                  <span className="icon"><i class="fab fa-elementor"></i></span>
                  <span className="title">UI Elements</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="icon"><i class="fas fa-chart-pie"></i></span>
                  <span className="title">Charts</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="icon"><i class="fas fa-border-all"></i></span>
                  <span className="title">Tables</span>
                </Link>
              </li>
            </ul>
          </div>
      </div>
      <div className="container">
          <div className="item">
          <Route path="/profile/dashboard" component={UserUpdate}></Route>
          <Route path="/profile/forms" component={UserUpdates}></Route>
          </div>
      
        
       
        
      </div>
  </div>



        </div>
    )
}

export default Profile