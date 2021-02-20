import React from "react"
import {Container,Row,Col} from 'react-bootstrap'

import '../fontawesome.js'

// import { ZapIcon} from '@primer/octicons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import people from "../assets/github/people.svg"
// import AccessibilityIcon from '@material-ui/icons/Accessibility';
// import { GoOrganization } from "react-icons/GoOrganization";

// import { Link, Route } from "react-router-dom";
// import UserUpdates from "./settingProfile/userUpdates";
// import UserUpdate from "./settingProfile/userUpdate";
// import { TiUserOutline } from "react-icons/ti";
// import { BiBox, BiBlanket } from "react-icons/bi";
// import { HiOutlineCurrencyDollar } from "react-icons/hi";
// import { Bar, defaults } from 'react-chartjs-2'
// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'


const Setting = () => {

    return (
        

         /* <div className="Dashbord">

            <div className="container-fluid Dash_container">
                <div className="row Dash_row">
                    <div className="  col-12 Dash_four_container" >
                        <div className="col-3" className="Dash_customer">
                            
                            <div className="Dash_icon_container">
                            <FontAwesomeIcon icon="user" className="Dash_icons" />
                            </div>
                            <h5><span>Customer</span> <br/><span>334</span></h5>
                        </div>
                        <div className="col-3   Dash_complete_order">
                            <div className="Dash_icon_container">
                            <FontAwesomeIcon icon="user" className="Dash_icons" />
                            </div>
                        
                            <h5>Complete order </h5>
                        </div>
                        <div className="col-3  Dash_uncomplete_order">
                        <div className="Dash_icon_container">
                            <FontAwesomeIcon icon="user" className="Dash_icons" />
                            </div>

                            <h5>uncomplete order</h5>
                        </div>
                        <div className="col-3" className="Dash_recived_payment">

                        <div className="Dash_icon_container">
                            <FontAwesomeIcon icon="user" className="Dash_icons" />
                            </div>
                            <h5>Recivied payment</h5>
                        </div>

                    </div>
                </div>
            </div>
        </div> */

        
    <div>   
{/* <Container>
<div className="rows">
<div className="Col-1"> col1</div>
<div className="col-2"> col2</div>
<div className="col-3"> col1</div>
<div className="col-4"> col1</div>
<div className="col-5"> col1</div>
<div className="col-6"> col1</div>
<div className="col-7"> col1</div>
<div className="col-8"> col1</div>
<div className="col-9"> col1</div>
<div className="col-10"> col10</div>
<div className="col-11"> col11</div>
<div className="col-12"> col12</div>
</div>

</Container> */}
<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
</div>



    )

}


export default Setting;