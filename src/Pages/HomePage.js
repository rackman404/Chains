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
            <div>
            
                <React.Fragment>
                    <div style={{ justifyContent: "center", display: "flex" }}>
                        <Card style={{textAlign: "center", minWidth: '80vw', minHeight: '75vh'}} raised="true"> 
                            <CardContent>
                                Dashboard
                            </CardContent>
                        </Card>     
                    </div>
                </React.Fragment>
            </div>
        </div>
    );
};

export default HomePages;