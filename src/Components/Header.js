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
import { useEffect, useState } from 'react'
import { Wallet } from "../services/near-wallet";
import { utils } from 'near-api-js';

const CONTRACT_NAME = "guestbook.near-examples.testnet"
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_NAME })

const Header = (props) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    const initFunction = async () => {
      const isSignedIn = await wallet.startUp();
      setIsSignedIn(isSignedIn);
    }
    initFunction();
    }, []);

  const signIn = () => { wallet.signIn() }

  const signOut = () => { wallet.signOut() }
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              
              <Typography style = {{textAlign: 'center'}} variant="h3" component="div" sx={{ flexGrow: 1 }}>
                  Chains
              </Typography>

              <Avatar alt= "joe biden"  image={"../Static/default_no_person.jpg"}/>

              <Button 
                 onClick={signIn}
               
              color="inherit">Login</Button>

            </Toolbar>

            <div style={{textAlign: 'center'}}>
                {/* Endpoint to route to Target component */}
                <Button color="secondary">
                  <Link to="/">Home</Link> 
                </Button>
                <Button color="secondary">
                <Link to="/Profile">Profile</Link>
                </Button>
                <Button color="secondary">
                <Link to="/Conversations">Conversations</Link>
                </Button>
            </div>

          </AppBar>
        </Box>
      );
};

export default Header;