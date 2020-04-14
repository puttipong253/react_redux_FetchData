import { GET_USER } from './action';

const initialState = {
    data: [],
    text: ''
}

export default function getUserReducer(state = initialState, action){
    switch (action.type) {
        case GET_USER:
            return {
                data: action.data
            }
        default:
            return state
    }
}