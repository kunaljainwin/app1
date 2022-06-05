import { AppBar, Avatar, Button, Stack, Toolbar } from '@mui/material';
import cogoToast from 'cogo-toast';
import React from 'react'
import "../App.css"


export default function NavigationBar() {
  let  isExpanded=true;
function toggleExpanded(){
    isExpanded=!isExpanded;
  }
  function sayHello() {
  
    cogoToast.success("Success!");
  }
  const dp="https://media-exp1.licdn.com/dms/image/D4D35AQGRq6uSPM4w7Q/profile-framedphoto-shrink_200_200/0/1653315172756?e=1653980400&v=beta&t=79UGh5_Zf01B5lOdhxPC9V90nnKeCF_K_jPZPnQhi6Y";
  return (
    <AppBar id='navigation'>
<Toolbar style={{color:'white'}}>
 {/* Leading Title */}
<h1><span style={{color:'red', fontSize:'36px'}}>K</span>unal <span style={{color:'red',fontSize:'36px'}}>J</span>ain</h1>
  <Stack id='nav-stack'  direction={"row"} marginLeft={'auto'} spacing={2}>
  <Button className='nav-button' fontSize={"20px"} onClick={toggleExpanded()} variant=''>HOME</Button>
  <Button className='nav-button'variant='' onClick={sayHello}>ABOUT</Button>
  <Button className='nav-button'variant='' >ACHIEVEMENTS</Button>
  <Button className='nav-button' variant=''>EXPERIENCE</Button>
  <Button className='nav-button' variant=''>CONTACT</Button>

 {/* My Avatar -> linkedin profile*/}
<a href='https://www.linkedin.com/in/kunal-jain-32bbb418a/'>  <Avatar src={dp} link onClick="" size="small"
  rounded
  title="User"></Avatar></a>
  </Stack>

  <footer/>
 
</Toolbar>
    </AppBar>
  );
   
}
