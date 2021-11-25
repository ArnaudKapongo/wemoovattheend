import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import Consultant from './Consultant';
import ConsultantItem from '../consultants/ConsultantItem';
import { getConsultantsByCompany, getConsultants } from '../../actions/consultants';


export const Dashboard = ({ getConsultants , getConsultantsByCompany, consultant: { consultants, loading }, auth  }) => {

    useEffect(() => {
        if(auth.user.name == "wemoov" ) {
            getConsultants();
        } else {
            getConsultantsByCompany();
        }
    }, []);
    
    return (
        <div className="container-app">
             { consultants.map(consultant => (
                    <ConsultantItem key={consultant._id} consultant={consultant} />
                ))}
        </div>
    )
    
}

Dashboard.propTypes = {
    getConsultants: PropTypes.func.isRequired,
    getConsultantsByCompany: PropTypes.func.isRequired,
    consultant: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    consultant: state.consultant,
    auth: state.auth
});

export default connect(mapStateToProps, { getConsultantsByCompany, getConsultants } )(Dashboard);
