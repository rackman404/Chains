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


const Post = (props) => {
    return (
      
          <Card sx={{width:'60vw', marginBottom: '2%', border: 'none'}}>
            <div>
              <Avatar alt= "user avatar"  image={props.avatarImage}/>
              <Typography style={{textAlign: 'left'}} sx={{fontSize: 15}} color="text.secondary"> 
              {props.user}
              </Typography>
            </div>
            
            <div >
            
            </div>
            <Typography style={{textAlign: 'center'}} sx={{fontSize: 25}} color="text.secondary"> 
              {props.text}
            </Typography>
        </Card>
      

      
      );
};

export default Post;