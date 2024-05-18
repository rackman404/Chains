import React, { Fragment } from "react";
import {Link} from "react-router-dom";

import portrait from './logo192.png';

//MUI imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";

//local component header
import Header from '../Components/Header.js'


const Profile = (props) => {
    return (
        <div>
            <Header/>
        </div>
    );
};

export default Profile;