import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {

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
        return <Redirect to="/dashboard" />;
    }

    return (
    <>
      <h1 className="large text-primary">Connexion</h1>
      <p className="lead"><i className="fas fa-user"></i> Accéder à votre compte</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" 
          placeholder="Adresse email"
          value={email}
          onChange={e => onChange(e) }
          required
          name="email" />
          <small className="form-text"
            >Le site utilise Gravatar pour les images de profil, utilise
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            minLength="6"
            value={password}
            onChange={e => onChange(e) }
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Connexion" />
      </form>
      <p className="my-1">
        Vous n'avez pas de compte ? <Link to="/register">S'inscrire</Link>
      </p>
      </>
    )
}
Login.prototype = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login})(Login)
