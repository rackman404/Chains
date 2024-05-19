import React, { Fragment } from "react";
import {Link} from "react-router-dom";

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";

const Sidebar = (props) => {
    return (
      <div style={{lmargin: '10', textAlign: 'center'}}>
        <Box height = '100%' sx= {{border : 1, height : "100vh", minWidth: 200}} >
          <h2>Popular<br/> Communities</h2>
        {/*would dynamically fill with links to community pages*/}

        <a href= {"google.com"}> Link </a> <br/>
        <a href= {"google.com"}> Link </a> <br/>
        <a href= {"google.com"}> Link </a> <br/>
        <a href= {"google.com"}> Link </a> <br/>
        <a href= {"google.com"}> Link </a> <br/>
        </Box>
      </div>
    );
};

export default Sidebar;