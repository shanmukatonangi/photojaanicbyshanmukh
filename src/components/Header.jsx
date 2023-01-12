
import { AppBar, Menu } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import "./style.css"
const Header = () => {
  return (
    <div className='header'>
    
     <MenuIcon style={{color:"black"}} />

     <div className='logoicon'><img src='https://www.images.photojaanic.com/homepage/banners/in/newui2020/images/icons/pj-logos.svg' /></div>
     
     
    </div>
  )
}

export default Header
