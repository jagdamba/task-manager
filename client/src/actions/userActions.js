import { login, logout, addTodo, updateTodo, getBuckets, addBucket, updateBucket, deleteTodo, getTodo ,deleteBucket} from './action';
import authHeader from '../auth-header';

const baseUrl = 'http://localhost:8000'
const token = authHeader()

export const loginApi = (params) => {
    return dispatch => {
        (
            fetch(baseUrl + '/api/login/', {
                'method': "post",
                'Content-Type': 'application/json',
            })
                .then((res) => res.json())
                .then((res) => {
                    localStorage.setItem('token', res.token)
                    dispatch({
                        type: login,
                        data: res
                    })
                })
        )
    }
}

export const getAllTask = (params) => {
    return dispatch => {
        (
            fetch(baseUrl + '/api/todo/', {
                'method': "get",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    dispatch(getTodo(res))
                })
        )
    }
}


export const addTodos = (data) => {
    return dispatch => {
        (
            fetch(baseUrl + '/api/todo/', {
                'method': "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                'body': JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((res) => {
                    alert(res.message)
                    dispatch(addTodo(res.data))
                })
        )
    }
}

export const updateTodos = (data, id) => {
    return dispatch => {
        (
            fetch(baseUrl + `/api/todo/${id}/`, {
                'method': "patch",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                'body': JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((res) => {
                    alert(res.message)
                    dispatch(updateTodo(res.data))
                })
        )
    }
}

export const deleteTodos = (id) => {
    return dispatch => {
        (
            fetch(baseUrl + `/api/todo/${id}/`, {
                'method': "delete",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                }
            })
                .then((res) => res.json())
                .then((res) => {
                    alert("Todo deleted Successfully....")
                    dispatch(deleteTodo(id))
                })
        )
    }
}

export const getAllBuckets = () => {
    return dispatch => {
        (
            fetch(baseUrl + '/api/bucket/', {
                'method': "get",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    dispatch(getBuckets(res))
                })
        )
    }
}

export const addBuckets = (data) => {
    return dispatch => {
        (
            fetch(baseUrl + '/api/bucket/', {
                'method': "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                'body': JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((res) => {
                    alert(res.message)
                    dispatch(addBucket(res.data))
                })
        )
    }
}

export const updateBuckets = (data, id) => {
    return dispatch => {
        (
            fetch(baseUrl + `/api/bucket/${id}/`, {
                'method': "patch",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
                },
                'body': JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((res) => {
                    alert(res.message)
                    dispatch(updateBucket(res.data))
                })
        )
    }
}

