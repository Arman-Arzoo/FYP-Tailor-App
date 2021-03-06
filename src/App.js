import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './home.css';
import Header from './components/header';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import UserContext from './context/userContext';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Footer from './components/footer';
import Profile from './components/profile';
import Setting from './components/setting';
// import "../node_modules/dist/css/bootstrap.min.css";



function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", '');
        token = '';

      }

      const tokenRes = await Axios.post('http://localhost:4000/users/tokenIsValid', null, { headers: { "x-auth-token": token } });


      if (tokenRes.data) {
        const userRes = Axios.get('http://localhost:4000/users/', { headers: { "x-auth-token": token } });

        setUserData({
          token,
          user: (await userRes).data

        });
      }


    };
    checkLoggedIn()


  }, []);





  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>


        <div id="full" className=" jumbotron-fluid fullSize">
          <Header />
          
          <Switch>
            <main className="main">
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={LogIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/update" component={Setting}></Route>
            </main>
          </Switch>
          <Footer />
        </div>
       
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
