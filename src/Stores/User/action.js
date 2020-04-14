export const GET_USER = 'GET_USER';

export const getUser = (data) => ({
    type: GET_USER,
    text: 'get all user',
    data
})