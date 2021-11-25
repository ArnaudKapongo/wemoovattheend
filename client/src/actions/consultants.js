import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_CONSULTANTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT,
    GET_CONSULTANTS_BY_COMPANY
} from './types';


// Get consultants by compagny
export const getConsultantsByCompany  = () => async dispatch => {
    try {
        const res = await axios.get('/api/consultant/company');

        dispatch({
            type: GET_CONSULTANTS_BY_COMPANY,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}


// Get consultants
export const getConsultants = () => async dispatch => {
    try {
        const res = await axios.get('/api/consultant');

        dispatch({
            type: GET_CONSULTANTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}





