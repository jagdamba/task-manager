import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAllBuckets, addTodos, updateTodos, getAllTask } from "../actions/userActions";

const CustomNavbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
            <Link to="/" className=" navbar-brand text-info " style={{ fontSize: '40px', }}>TaskManager</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"  ></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto " >
                    <p className=" text-white  mt-4" style={{ fontSize: '30px', marginLeft: '150%' ,textDecoration:'underline',fontWeight:'500'}}>{props.title} </p>
                </ul>
                <span class="navbar-text">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active mt-2 mr-5">
                            <Link to="/" className='text-info' style={{ fontSize: '20px', }} >Tasks</Link>
                        </li>
                        <li class="nav-item  mt-2">
                            <Link to="/categories" className='text-info' style={{ fontSize: '20px', }} >Categories</Link>
                        </li>
                    </ul>
                </span>
            </div>
        </nav>



    )
}

export default CustomNavbar;