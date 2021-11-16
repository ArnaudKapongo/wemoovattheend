import React from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({ profile: {
    description,
    user: { name },
    generalSkills
} }) => {
    return (
    <div className='profile-about bg-light p-2'>
    {description && (
      <>
        <h2 className='text-primary'>{name.trim().split(' ')[0]} Bio</h2>
        <p>{description}</p>
        <div className='line' />
      </>
    )}
    <h2 className='text-primary'>Compétences du manager</h2>
    <div className='skills'>
      {generalSkills.map((skill, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check' /> {skill}
        </div>
      ))}
    </div>
  </div>
    )
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileAbout
