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


const InfoCard = (props) => {
    return (
        <Card raised='true'>
            <Typography style={{textAlign: 'center'}} sx={{fontSize: 25}} color="text.secondary" gutterBottom> 
              {props.text}
            </Typography>
        </Card>
      );
};

export default Header;