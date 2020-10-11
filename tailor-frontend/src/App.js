import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import UserContext from './context/userContext';
import { useState ,useEffect } from 'react';
import Axios from 'axios';


function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async ()=>{
      let token = localStorage.getItem("auth-token");
      if(token ===null){
        localStorage.setItem("auth-token",'');
        token = '';

      }

      const tokenRes = await Axios.post('http://localhost:4000/users/tokenIsValid',null,{headers:{"x-auth-token":token}});

      if(tokenRes.data){
        const userRes = Axios.get('http://localhost:4000/users/',{headers:{"x-auth-token":token}});

        setUserData({
          token,
          user:userRes.data,

        });
      }

  
    };
checkLoggedIn()


  }, []);





  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={LogIn}></Route>
            <Route path="/signup" exact component={SignUp}></Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
