import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileConsultant from './ProfileConsultant';
import { getProfileById } from '../../actions/profile';

const Profile = ({ getProfileById, profile: { profile , loading }, auth, match}) => {

    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    return (
        <>
          {profile === null || loading ? <Spinner /> : <><Link to="/profiles" className="btn btn-light"> 
          Retour aux profils
          </Link>
          
          { auth.isAuthenticated && auth.loading === false 
          && auth.user._id === profile.user._id 
          && (
          <Link to='/edit-profile' className='btn btn-dark'>Modifier votre profil</Link>
          )}
          <div className="profile-grid my-1">
              <ProfileTop profile={profile} />
              <ProfileAbout profile={profile} />
              <div className="profile-exp bg-white p-2">
                <h2 className="text-primary">Consultant</h2>
                {profile.consultant.length > 0 ? (<>
                {profile.consultant.map(consultant => (
                    <ProfileConsultant key={consultant._id} consultant={consultant} />
                ))}
                </>) : (<h4>Aucun consultant pour le moment</h4>)}
              </div>
          </div>
          </>}  
        </>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileById })(Profile)
