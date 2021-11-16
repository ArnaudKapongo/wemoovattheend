import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileConsultant = ({ consultant: {
    name, surname
} }) => 
        <div>
            <h3 className="text-dark">{name}</h3>
            <p>

            </p>
        </div>;

ProfileConsultant.propTypes = {
    consultant: PropTypes.array.isRequired
}

export default ProfileConsultant
