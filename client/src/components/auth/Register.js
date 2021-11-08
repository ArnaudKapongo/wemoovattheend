import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });


    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2)  {
           setAlert('Password do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    }

    if(isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
    <>
      <h1 className="large text-primary">S'inscrire</h1>
      <p className="lead"><i className="fas fa-user"></i> Crée votre compte</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" 
          placeholder="Nom de la société" 
          name="name" 
          value={name}  
          onChange={e => onChange(e)}
          required />
        </div>
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            name="password2"
            minLength="6"
            value={password2}
            onChange={e => onChange(e) }
          />
        </div>
        <input type="submit" className="btn btn-primary" value="S'inscrire" />
      </form>
      <p className="my-1">
        Vous avez déjà un compte ? <Link to="/login">Connexion</Link>
      </p>
      </>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps, 
    { setAlert, register }
    )(Register);
