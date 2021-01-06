import React, { useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import { loginApi, getAllBuckets} from "../actions/userActions"
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'

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
            <div className="container p-3 my-3 bg-primary text-white">
                <h1>Bucket's</h1>
            </div>
            <div className="btn-block pull-right">
                <Row>
                    <Col md={8}>
                    </Col>
                    <Col md={4}>
                        <Link to="/bucket" className="btn btn-primary mr-1">+ Bucket</Link>
                        <Link to="/" className="btn btn-primary">View Todo's</Link>
                    </Col>
                </Row>
            </div>
            {  buckets.bucketlist && buckets.bucketlist.map((obj, i) => {

                return (<div className="card m-1" key={i}>
                    <Row>
                        <Col md={10}>
                            <div className="card-body">Name : {obj.name}</div>
                            <div className="card-body">ID : {obj.id}</div>
                            <div className="card-body">created on : {moment(obj.created).format('DD-MM-YYYY hh:MM a')}</div>
                            <div className="card-body">created By : {obj.created_name}</div>
                        </Col>
                        <Col md={2} className="mt-3">
                            <Link to={`/bucket/${obj.id}`} className="btn btn-info">Edit</Link>{' '}

                        </Col>
                    </Row>
                </div>)
            })}
        </div >

    );
}

export default AllBucket;