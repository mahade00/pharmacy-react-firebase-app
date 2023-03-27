import React from 'react';
import './NavBar.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import Logo from '../images/logo/logo.png'




const NavBar = () => {
    return (
        <>       
        <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home"> <img className='pharmacy-logo' src={Logo} alt='pharmacy-logo'/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Stack direction="horizontal" gap={3} className='nav'>
            
                       <Nav.Link href="#home" className='navs'>Home</Nav.Link>
                       <div className="vr" />
                  <Nav.Link href="#shop" className='navs'>Shop</Nav.Link>
                  <div className="vr" />
                  <Nav.Link href="#services" className='navs'>Services</Nav.Link>
                  <div className="vr" />
                  <Nav.Link href="#doctors" className='navs'>Doctors</Nav.Link>  
              <div className="vr" />    
                  <Nav.Link href="#shop" className='navs '><ShoppingBagIcon className='shop-Icon' />0</Nav.Link>   
              <div className="vr" />    
                  <Nav.Link href="#price" className='navs'>$0</Nav.Link>  
              <div className="vr" />    
              <Nav.Link href="#login"><button className='btn-login'>LogIn</button></Nav.Link>   
                
                </Stack>         
               
            </Nav>
            </Navbar.Collapse>
          </Container>
          
        </Navbar>
        
       
        </>
    );
};

export default NavBar;