import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Container, Button, Paper, Typography, TextField } from '@material-ui/core'
import { connect } from 'react-redux';
import wemoov from './wemoov.png';
import { login } from '../../actions/auth';


const Admin = (login, isAuthenticated) => {

    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    
    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });


    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };
     // Redirect if logged in
     if(isAuthenticated) {
        return <Redirect to="/adminpage" />;
    }

        return (
            <Container maxWidth="md" style={{
              height: '-webkit-fill-available',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute', 
              left: '50%', 
              top: '50%',
              transform: 'translate(-50%, -50%)'
          }}>
              <Paper elevation={4} style={{
                  padding: 36,
                  display: 'flex',
                  width: '40%',
                  flexDirection: 'column',
                  alignItems: 'center',
                 background: 'grey'
              }}>
                  <form onSubmit={onSubmit}>
                  <img src={wemoov} alt={wemoov} className="wemoovimage"/>
                  <TextField variant="outlined" 
                  value={email}
                  onChange={onChange}
                  name="email"
                  label="Email" 
                  type="text" 
                  style={{
                      marginTop: 30,
                      marginBottom: 30
                  }} fullWidth/>
                 
                  <TextField variant="outlined" 
                  label="Mot de passe" 
                  type="password" 
                  onChange={onChange}
                  name="password"
                  value={password}
                  fullWidth/>
                  
                  <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  style={{
                      marginTop: 30,
                      marginBottom: 5
                  }}
                  >
                     Connexion
                  </Button>
                  <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%'
                  }}>
                      <Typography>
                          {/*Connexion*/}
                      </Typography>
                  </div>
                  </form>
              </Paper>
          </Container>
          )
}



Admin.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Admin)


