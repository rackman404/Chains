import React, { Fragment } from "react";
import {Link} from "react-router-dom";

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import Post from "./Post.js"
import Conversation from "./Conversations/Conversation.js"

const Dashboard = (props) =>{

    return (
        <div style = {{overflowY: 'scroll', marginTop: '5%'}}>
            <box alignItems = 'center'>
            <Post text = "Just set up my near wallet!!" avatarImage= "../Static/default_no_person.jpg" user = "coolguy123"></Post>
            <Post text = "Looking for someone to trade NFT... HMU!" avatarImage= "../Static/default_no_person.jpg" user = "NFT_lover"></Post>
            <Post text = "Chains is my new favourite app <3" avatarImage= "../Static/default_no_person.jpg" user = "bitcoin_boy"></Post>
            <Post text = "I'm new to the blockchain guys, any information or advice is greaty appriciated !!" avatarImage= "../Static/default_no_person.jpg" user = "turtleguy44"></Post>
            </box>
          
        </div>
    );
};

export default Dashboard;