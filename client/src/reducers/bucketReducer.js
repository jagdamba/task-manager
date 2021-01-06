const bucketReducer = (state = [], action) => {
    switch (action.type) {
        case 'GETBUCKET':
            return {
                ...state,
                bucketlist: action.payload
            }

        case 'ADDBUCKET':
            return state.bucketlist.concat([action.payload])

        case 'UPDATEBUCKET':
            return state.bucketlist.map((bucket) => {
                if (bucket.id === action.payload.id) {
                    return {
                        ...bucket,
                        id: action.payload.id,
                        name: action.payload.name,
                        created: action.payload.created,
                        created_by: action.payload.created_by,
                    }
                } else {
                    return bucket;
                }

            });

        case 'DELETEBUCKET':
            return state

        default:
            return state
    }
}

export default bucketReducer;