import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAllBuckets, addTodos, updateTodos, getAllTask } from "../actions/userActions";

const TodoForm = (props) => {
    const [todoId, setId] = useState(props.match.params.id);
    const [task, setTask] = useState('');
    const [selectedbucket, setBucket] = useState('');
    const [iscompleted, setCompleted] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const allbuckets = useSelector(state => state.bucket.bucketlist)
    const allTodos = useSelector(state => state.todo.todolist)

    useEffect(() => {
        if (!isLoggedIn) {
            dispatch(getAllTask())
            dispatch(getAllBuckets())
        }
        if (allTodos) {
            const task = allTodos.filter((obj) => {
                return obj.id == todoId
            })

            if (task && task[0]) {
                console.log(task[0].task_bucket)
                setBucket(parseInt(task[0].task_bucket) ? task[0].task_bucket : 0)
                setTask(task[0].task);
                setCompleted(task[0].is_completed);
            }
        }
    }, [])

    const addUpdateTodo = (e) => {
        e.preventDefault();
        const data = {
            "task": task,
            "task_bucket": selectedbucket,
            "is_completed": iscompleted
        }

        if (todoId) {
            dispatch(updateTodos(data, todoId));
        } else {
            dispatch(addTodos(data));
        }
    }

    return (
        <div className="container">
            <div className="container p-3 my-3 bg-primary text-white">
                <h1>Add Todo</h1>
            </div>
            <div className="btn-block pull-right">
                <Row>
                    <Col md={10}>
                    </Col>
                    <Col md={2}>
                        <Link to="/" className="btn btn-info">ALL Todo's</Link>
                    </Col>
                </Row>
            </div>
            <div>
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Task</label>
                        <input name="task" type="textarea" className="form-control" id="exampleFormControlInput1" defaultValue={task} onChange={(e) => setTask(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Bucket</label>
                        <Row>
                            <Col md={8}>
                                <select name="task_bucket" className="form-control" id="exampleFormControlSelect1" value={selectedbucket} onChange={(e) => setBucket(e.target.value)}>
                                    <option value={0}>Select Bucket</option>
                                    {allbuckets && allbuckets.map((obj, i) => {
                                        return (<option key={i} value={obj.id}>{obj.name}</option>)
                                    })}
                                    <option>1</option>
                                </select>
                            </Col>
                            <Col md={4}>
                                <Link to="/bucket" className="btn btn-primary">+ Buckets</Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={iscompleted} onClick={(e) => setCompleted(!iscompleted)} />
                        <label name="is_completed" className="form-check-label" for="exampleCheck1" >Mark Completed</label>
                    </div>
                    <button className="btn btn-primary" onClick={(e) => addUpdateTodo(e)}>{todoId ? 'Update' : 'Add'}</button>
                </form>
            </div>
        </div >
    )
}

export default TodoForm;