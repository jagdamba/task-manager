import React, { useEffect } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import { loginApi, getAllTask, getAllBuckets } from "../actions/userActions"
import { useDispatch, useSelector } from "react-redux";
import { deleteTodos } from '../actions/userActions';
import moment from 'moment';

const AllTodo = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo)
    
    useEffect(() => {
        if (!state.isloggedIn) {
            dispatch(loginApi());
            dispatch(getAllTask());
        } else {
            dispatch(getAllTask());
        }
        dispatch(getAllBuckets());
    }, [])
    
    const deleteTodo = (id) => {
        dispatch(deleteTodos(id))
    }

    return (
        <div className="container">
            <div className="container p-3 my-3 bg-primary text-white">
                <h1>Tasks</h1>
            </div>
            <div className="btn-block pull-right">
                <Row>
                    <Col md={8}>
                    </Col>
                    <Col md={4}>
                        <Link to="/todo" className="btn btn-primary mr-1">+ Todo</Link>
                        <Link to="/allbucket" className="btn btn-primary">View Buckets</Link>
                    </Col>
                </Row>
            </div>
            {todo.todolist && todo.todolist.map((obj, i) => {
                return (
                    <div className="card m-1" key={i}>
                        <Row>
                            <Col md={10}>
                                <div className="card-body">Task : {obj.name}</div>
                                <div className="card-body">Bucket : {obj.category_name}</div>
                                <div className="card-body">Created On : {moment(obj.created).format('DD-MM-YYYY hh:MM a')}</div>
                                <div className="card-body">Created By : {obj.created_name}</div>
                                <div className="card-body">Completed : {obj.is_completed  ? "Yes" : "No"}</div>
                            </Col>
                            <Col md={2} className="mt-3">
                                <Link to={`/todo/${obj.id}`} className="btn btn-info">Edit</Link>{' '}
                                <Button color="warning"  onClick={() => deleteTodo(obj.id)}>Delete</Button>
                            </Col>
                        </Row>
                    </div>
                )
            })}
        </div >

    );
}

export default AllTodo;