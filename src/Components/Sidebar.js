import React, { Fragment } from "react";
import {Link} from "react-router-dom";

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';



const Sidebar = (props) => {
    return (
      <div style={{marginTop: 80, textAlign: 'center'}}>
        <Drawer variant="permanent" anchor="right" ModalProps={{keepMounted: true}}>
          <h2> Popular <br/> Communities </h2>

          {/*would dynamically fill with links to community pages*/}

          <a href= {"google.com"}> Link </a> 
          <a href= {"google.com"}> Link </a> 
          <a href= {"google.com"}> Link </a> 
          <a href= {"google.com"}> Link </a> 
          <a href= {"google.com"}> Link </a> 
          

        </Drawer>
      </div>
    );
};

export default Sidebar;