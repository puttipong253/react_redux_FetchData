import { USER_DETAIL } from './action';

const initialDetail = {
    detail: [],
    text: ''
}

export default function userDetail(state = initialDetail, action){
    switch (action.type) {
        case USER_DETAIL:
            return {
                detail: action.detail
            }
        default:
            return state
    }
}
