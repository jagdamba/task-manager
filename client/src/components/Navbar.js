import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const CustomNavbar = (props) => {

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (

        <div>
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark mt-3 mb-4">
                <NavbarBrand href="/" className="mr-auto"> <Link to="/" className=" navbar-brand text-info " style={{ fontSize: '40px', }}>TaskManager</Link></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <ul class="navbar-nav mr-auto " >
                        <p className=" text-white  mt-4" style={{ fontSize: '30px', marginLeft: '100%', fontWeight: '500' }}>{props.title} </p>
                    </ul>
                    <Nav navbar>
                        <NavItem className='mt-2 mr-3'>
                            <Link to="/task" className='text-info' style={{ fontSize: '20px', textDecoration: 'underline', }} >AddTask</Link>
                        </NavItem>
                        <NavItem className='mt-2 mr-3'>
                            <Link to="/" className='text-info' style={{ fontSize: '20px', textDecoration: 'underline', }} >Tasks</Link>
                        </NavItem>
                        <NavItem className='mt-2 mr-3'>
                            <Link to="/category" className='text-info' style={{ fontSize: '20px', textDecoration: 'underline', }} >AddCategory</Link>
                        </NavItem>
                        <NavItem className='mt-2 mr-3'>
                            <Link to="/categories" className='text-info' style={{ fontSize: '20px', textDecoration: 'underline', }} >Categories</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default CustomNavbar;