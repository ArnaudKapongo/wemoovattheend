import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    ACCOUNT_DELETED,
    GET_PROFILES,
    GET_REPOS
} from './types';



// Get current users profile
export const getCurrentProfile = () => async dispatch => {
    try{
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch(err) {
       dispatch({
           type: PROFILE_ERROR,
           payload: {
               msg: err.response.statusText, status: err.response.status
           }
       });
    }
}


// Get all profiles 
export const getProfiles = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE });

    try{
        const res = await axios.get('/api/profile');

        dispatch({
            type: GET_PROFILES,
            payload: res.data
        });
    } catch(err) {
       dispatch({
           type: PROFILE_ERROR,
           payload: {
               msg: err.response.statusText, status: err.response.status
           }
       });
    }
}

// Get profile by ID
export const getProfileById = userId => async dispatch => {
    
    try{
        const res = await axios.get(`/api/profile/user/${userId}`);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch(err) {
       dispatch({
           type: PROFILE_ERROR,
           payload: {
               msg: err.response.statusText, status: err.response.status
           }
       });
    }
}


/* Get Github repos
export const getGithubRepos = username => async dispatch => {
    
    try{
        const res = await axios.get(`/api/profile/github/${username}`);

        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    } catch(err) {
       dispatch({
           type: PROFILE_ERROR,
           payload: {
               msg: err.response.statusText, status: err.response.status
           }
       });
    }
}*/



// Create or update a profile 
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
     const config = {
         headers: {
             'Content-Type': 'application/json'
         } 
     }

     const res = await axios.post('/api/profile', formData, config);

     dispatch({
         type: GET_PROFILE,
         payload: res.data
     });

     dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success' ));

     if(!edit) {
         history.push('/dashboard');
     }
    } catch(err) {
        const errors = err.response.data.errors;
      
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
       dispatch({
           type: PROFILE_ERROR,
           payload: {
               msg: err.response.statusText, status: err.response.status
           }
       });
    }
}

// Add Consultant 
export const addConsultant = (formData, history) => async dispatch => {
    try {
     const config = {
         headers: {
             'Content-Type': 'application/json'
         } 
     }

     const res = await axios.put('/api/profile/consultant', formData, config);

     dispatch({
         type: UPDATE_PROFILE,
         payload: res.data
     });

     dispatch(setAlert('Consultant Added', 'success' ));

     history.push('/dashboard');
    } catch(err) {
        const errors = err.response.data.errors;
      
        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
       dispatch({
           type: PROFILE_ERROR,
           payload: {
               msg: err.response.statusText, status: err.response.status
           }
       });
    }
}


// Delete Consultant
export const deleteConsultant = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/profile/consultant/${id}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Consultant Removed', 'success'));


    } catch(err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status }
        });
    }
}

// Delete account & profile
export const deleteAccount = () => async dispatch => {

    if(window.confirm('??tes-vous s??r de vouloir supprimer votre compte ?')) {
        try {
            await axios.delete(`/api/profile`);
    
            dispatch({
                type: CLEAR_PROFILE
            });

            dispatch({
                type: ACCOUNT_DELETED
            });
    
            dispatch(setAlert('Votre compte ?? ??t?? supprim??'));
    
    
        } catch(err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {msg: err.response.statusText, status: err.response.status }
            });
        }
    }
}