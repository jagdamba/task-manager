import React, { useEffect } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import { loginApi, getAllTask, getAllBuckets } from "../actions/userActions"
import { useDispatch, useSelector } from "react-redux";
import { deleteTodos } from '../actions/userActions';
import moment from 'moment';
import CustomNavbar from '../components/Navbar';


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
            <CustomNavbar title={'AllTasks'} />
            {todo.todolist && todo.todolist.map((obj, i) => {
                return (
                    <div className="card  mt-2 m-1" key={i}>
                        <Row>
                            <Col xs={9} md={10}>
                                <div className=" " > <span className='ml-1'>
                                    {obj.is_completed ?
                                        <i className='fa fa-check-circle text-success  ' ></i>
                                        : <i className='fa fa-times-circle text-danger  ' ></i>}</span>
                                    <span style={{ fontSize: '30px', fontWeight: '400', color: '#3a5e95' }} className='mr-2'>{obj.name}  </span ></div>
                                <div className="m-2"><span className='mr-1'>< i className='fa fa-filter mr-2'></i></span>{obj.category_name}</div>
                                <div className="m-2"> <span className='mr-2'>< i className='fa fa-user mr-2'></i>{obj.created_name}</span>
                                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#3a5e95' }} >
                                        {'( '}  {moment(obj.created).format('DD-MM-YYYY hh:MM a')}{'  )'}</span>
                                </div>
                            </Col>
                            <Col xs={3} md={2} className="mt-3">
                                <Link to={`/task/${obj.id}`} className="btn btn-secondary mr-2 mb-3"><i className='fa fa-edit'></i></Link>{' '}
                                <Button className='mb-3' color="danger" onClick={() => deleteTodo(obj.id)}><i className='fa fa-trash'></i></Button>
                            </Col>
                        </Row>
                    </div>
                )
            })}
        </div >

    );
}

export default AllTodo;