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


const Header = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
                <Button color="inherit"> = </Button> 
              
              <Typography style = {{textAlign: 'center'}} variant="h3" component="div" sx={{ flexGrow: 1 }}>
                Chains
              </Typography>

              <Avatar alt= "joe biden"  image={"../Static/default_no_person.jpg"}/>

              <Button 
              onClick={() => {
                alert('clicked');
                //actual NEAR API interaction here

               }}
              color="inherit">Login</Button>

              {/* filler text because of sidebar overlapping, ignore for now*/}
              <h1>sefdfass </h1>
   

            </Toolbar>

            <div style={{textAlign: 'center'}}>
                {/* Endpoint to route to Target component */}
                <Link to="/">Home</Link> 
                <text> </text>
                <Link to="/Profile">Profile</Link>
                <text> </text>
            </div>

          </AppBar>
        </Box>
      );
};

export default Header;