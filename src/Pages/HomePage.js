import React, { Fragment } from "react";
import {Link} from "react-router-dom";

import portrait from './logo192.png';
import cssClasses from './HomePage.css' //is used

//MUI imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";

//local component header
import Header from '../Components/Header.js'
import Sidebar from "../Components/Sidebar.js";

const aboutMeText = "Lorum Ipsum";





const HomePages = (props) => {
    return (
        <div>
            {<Header/>}
            {<Sidebar/>}
            
            <div>
                <div style={{textAlign: 'center'}}>
                    {/* Endpoint to route to Target component */}
                    <Link to="/">Home</Link> 
                    <text> </text>
                    <Link to="/Profile">Profile</Link>
                    <text> </text>
                </div>

                <React.Fragment>
                    <Box sx={{minWidth: 275}}>
                        <Card sx={{textAlign: "center", maxWidth: '80vw', minHeight: '75vh'}} raised="true"> 
                            <CardContent>
                                Dashboard
                            </CardContent>
                        </Card>
                    </Box>
                </React.Fragment>
                

            </div>
        </div>
    );
};

export default HomePages;