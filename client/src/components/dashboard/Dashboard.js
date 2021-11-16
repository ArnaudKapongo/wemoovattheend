import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Consultant from './Consultant';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';

export const Dashboard = ({ getCurrentProfile, 
    auth: { user }, 
    profile: { profile, loading },
    deleteAccount }) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    return loading && profile === null ? <Spinner /> : <><h1 className="large text-primary">
        Tableau de bord
        </h1>
        <p className="lead">Bienvenu { user && user.name }</p>
        {profile !== null ? <>
        <DashboardActions/>
        <Consultant  consultant={ profile.consultant }/>
        <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
                Supprimer votre compte
            </button>
        </div>
        </> : <><p>You have not yet setup a prfile, please add some info</p>
        <Link to="/create-profile" className="btn btn-primary my-1">Crée votre profil</Link>
        </>}
        </>;
}


Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
      auth: state.auth,
      profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);