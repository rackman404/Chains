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
import dashboard from "../Components/dashboard.js"
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const aboutMeText = "Lorum Ipsum";


const HomePages = (props) => {
    return (
        <div>
            <div>
                <Header/>

            </div>
            <Grid container spacing={3}>
            <Grid xs = {2}>
                <Sidebar/>
            </Grid>

            <Grid xs={10}>
                <p>more text</p>
            </Grid>

            </Grid>
        </div>
    );
};

export default HomePages;