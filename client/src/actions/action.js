// TODOS
export function getTodo(data) {
    return {
        type: "GETTODO",
        payload: data
    }
}

export function addTodo(data) {
    return {
        type: "ADDTODO",
        payload: data
    }
}

export function updateTodo(data) {
    return {
        type: "UPDATETODO",
        payload: data
    }
}

export function deleteTodo(data) {
    return {
        type: "DELETETODO",
        payload: data
    }
}

// BUCKETS
export function getBuckets(data) {
    return {
        type: "GETBUCKET",
        payload: data
    }
}

export function addBucket(data) {
    return {
        type: "ADDBUCKET",
        payload: data
    }
}

export function updateBucket(data) {
    return {
        type: "UPDATEBUCKET",
        payload: data
    }
}


export function deleteBucket(data) {
    return {
        type: "DELETEBUCKET",
        payload: data
    }
}

export function login() {
    return {
        type: "LOGIN",
        data: []
    }
}

export function logout() {
    return {
        type: "LOGOUT",
    }
}


export function success() {
    return {
        type: "Success"
    }
}

export function fail() {
    return {
        type: "fail"
    }
}