import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../context/userContext';


const Profile = ()=>{
 
    const { userData } = useContext(UserContext);
    console.log("our data",userData)
    const history = useHistory();
    const name = ((userData || {}).user|| {}).displayName;

    return(

        <div>
        hello = {name}
   
        </div>
    )
}

export default Profile