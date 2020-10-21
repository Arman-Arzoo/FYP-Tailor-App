import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import UserContext from '../context/userContext';



const Profile = () => {

    const { userData } = useContext(UserContext);
    const history = useHistory();
    const name = ((userData || {}).user || {}).displayName;

    return (

        <div className="jumbotron my-3 p-3 bg-dark text-white">
            <div class="row">
                <div class="col-sm-4">
                    <div className="text-center">
                        <img class="rounded-circle " src="arman.png" alt="img" width="250" height="250"></img>
                        <h1>{name}</h1>
                    </div>

                </div>
                <div class="col-sm-8">
                    <table class="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{name}</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    )
}

export default Profile