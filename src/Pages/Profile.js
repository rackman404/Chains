import React, { Fragment } from "react";
import {Link} from "react-router-dom";

import portrait from './logo192.png';

//MUI imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";

const aboutMeText = "Hello, my name is Jacky Zhang and I am currently a student enrolled in Toronto Metropolitan University (Formerly Ryerson) for it's Computer Engineering Program. \n Some of my activites include working on Avionics as part of the MetRocketry Design Team and participating in Hackathons.";



const user = {
    name: 'Jacky Zhang',
    imageSrc: portrait,
    imageSize: 90,
  };

/*
  
function Profile(){
return(
    <>
    <h1>{user.name}</h1>
    <img
        className="avatar"
        src={user.imageSrc}
        alt={'Photo of ' + user.name}
        style={{
        width: user.imageSize,
        height: user.imageSize
        }}
        />
        <AboutSection/>
    </>  
);
}


function AboutSection(){
return(
    <>
    <h1>About</h1>
    <>{Profile}</>
    <text>{aboutMeText}</text>
    </>
);
}
*/

const Profile = (props) => {
    return (
        <div>
        
        </div>
    );
};

export default Profile;