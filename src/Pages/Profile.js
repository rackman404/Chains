import React, { Fragment } from "react";
import {Link} from "react-router-dom";

import portrait from './logo192.png';

//MUI imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

//local component header
import Header from '../Components/Header.js'


const Profile = (props) => {
    return (
        <div>

            <Header/>
            <Card raised='true'>
                <div style={{ justifyContent: "center", display: "flex" }}>
                    <Avatar alt= "joe biden"  image={"../Static/default_no_person.jpg" }   sx={{ width: 240, height: 240 }} />
                </div>

                <div style={{ justifyContent: "center", display: "flex" }}>
                    <Button color="inherit"> Market </Button> 
                    <Button color="inherit"> Posts </Button> 
                </div>
            </Card>

            

        </div>

    );
};

export default Profile;