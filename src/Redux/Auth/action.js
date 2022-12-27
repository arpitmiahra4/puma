import axios from "axios"
import * as types from "./actionTypes"



const registerUser = (payload) => (dispatch) => {
    dispatch({ type: types.USER_REGISTRATION_REQUEST })
    return axios.post("https://puma-backend.onrender.com/auth/register", payload).then((res) => {
        dispatch({ type: types.USER_REGISTRATION_SUCCESS })
    }).catch((error) => {
        dispatch({ type: types.USER_REGISTRATION_FAILURE, payload: error })
    })
}

const loginUser = (payload) => (dispatch) => {
    dispatch({ type: types.USER_LOGIN_REQUEST })
    return axios.post("https://puma-backend.onrender.com/auth/login", payload).then((res) => {
        dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data.token })
    }).catch((error) => {
        dispatch({ type: types.USER_LOGIN_FAILURE, payload: error })
    })
}



export { registerUser, loginUser }