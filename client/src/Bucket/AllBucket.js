import React, { useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { loginApi, getAllBuckets } from "../actions/userActions"
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import CustomNavbar from '../components/Navbar';


const AllBucket = () => {
    const state = useSelector(state => state)
    const buckets = useSelector(state => state.bucket)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!state.isloggedIn) {
            dispatch(loginApi());
            dispatch(getAllBuckets());
        } else {
            dispatch(getAllBuckets());
        }
        dispatch(getAllBuckets());
    }, [])


    return (
        <div className="container">
            <CustomNavbar title={'AllCategories'} />
            {  buckets.bucketlist && buckets.bucketlist.map((obj, i) => {
                return (
                    <div className="card  mt-2 m-1" key={i}>
                        <Row>
                            <Col xs={9} md={10}>
                                <div className=" " > <span className='ml-2'>
                                </span>
                                    <span style={{ fontSize: '30px', fontWeight: '400', color: '#3a5e95' }} className='mr-2'>{obj.name}  </span ></div>
                                <div className="m-2"> <span className='mr-2'>< i className='fa fa-user mr-2'></i>{obj.created_name}</span>
                                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#3a5e95' }} >
                                        {'( '}  {moment(obj.created).format('DD-MM-YYYY hh:MM a')}{'  )'}</span>
                                </div>
                            </Col>
                            <Col xs={3} md={2} className="mt-3">
                                <Link to={`/category/${obj.id}`} className="btn btn-secondary mr-2 mb-3"><i className='fa fa-edit'></i></Link>{' '}
                            </Col>
                        </Row>
                    </div>
                )
            })}
        </div >
    );
}

export default AllBucket;