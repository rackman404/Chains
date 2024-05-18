import React, { Fragment } from "react";
import {Link} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';


const Conversation = (props) => {
    return (
      <Button>
        <Card raised='true' sx={{width:'80vw'}}>
            <Avatar alt= "joe biden"  image={props.avatarImage}/>
            <div style={{ display: 'flex' }}>
            <Typography style={{textAlign: 'center'}} sx={{fontSize: 25}} color="text.secondary"> 
              {props.user}
            </Typography>
            </div>
            <Typography style={{textAlign: 'center'}} sx={{fontSize: 25}} color="text.secondary"> 
              {props.text}
            </Typography>
        </Card>
      </Button>
      );
};

export default Conversation;