import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const Navbar = ({ auth:  { isAuthenticated, loading }, logout }) => {

    const authLinks = (
    <ul>
        <li>
        <Link to='/profiles'>
        <span className="hide-sm">Managers</span></Link>
        </li>
        <li>
        <Link to='/posts'>
        <span className="hide-sm">Disscussions</span></Link>
        </li>
        <li>
        <Link to='/dashboard'>
        <span className="hide-sm">Tableau de bord</span></Link>
        </li>
        <li>
        <a onClick={logout} href='#!'>
           <span className="hide-sm">Déconnexion</span></a>
        </li>
    </ul>
    );

    const guestLinks = (
    <ul>
        <li>
        <Link to='/profiles'>
        <span className="hide-sm">Managers</span></Link>
        </li>
        <li>
            <Link to="/">
            Consultants
            </Link>
        </li>
        <li>
            <Link to="/register">
            S'inscrire
            </Link>
        </li>
        <li>
            <Link to="/login">
            Connexion
            </Link>
        </li>
    </ul>
    );

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/">
                WemoovTeams
                </Link>
            </h1>
           { !loading  && (<>{ isAuthenticated ? authLinks : guestLinks }</>) }
        </nav>
    )
}


Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);