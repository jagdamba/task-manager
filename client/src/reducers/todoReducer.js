const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'GETTODO':
            return {
                ...state,
                todolist: action.payload
            }

        case 'ADDTODO':
            return state.todolist.concat([action.payload])

        case 'UPDATETODO':
            return state.todolist.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        id: action.payload.id,
                        task: action.payload.task,
                        task_bucket: action.payload.task_bucket,
                        bucket_name: action.payload.bucket_name,
                        is_completed: action.payload.is_completed,
                    }
                } else {
                    return todo;
                }

            });

        case 'DELETETODO':
            return Object.assign({}, state, {
                todolist: state.todolist.filter((todo) => {
                    return todo.id !== action.payload
                })

            })
        default:
            return state
    }
}

export default todoReducer;