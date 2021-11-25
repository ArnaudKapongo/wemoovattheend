import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Consultant from '../dashboard/Consultant';
import { getConsultants } from '../../actions/consultants';
import ConsultantItem from '../consultants/ConsultantItem';

export const AdminPage = ({ getConsultants , consultant: { consultants, loading } }) => {

    useEffect(() => {
       getConsultants()
    }, [getConsultants()]);
    
    return (
        <div className="container-app">

             { consultants.map(consultant => (
                    <ConsultantItem key={consultant._id} consultant={consultant} />
             )) }

        </div>
    )
    
}

AdminPage.propTypes = {
    getConsultants: PropTypes.func.isRequired,
    consultant: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    consultant: state.consultant
});

export default connect(mapStateToProps, { getConsultants })(AdminPage);