import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CreateProfile = props => {

    const [ formData, setFormData ] = useState({ 
        name:'',
        website:'',
        address:'',
        digit:'',
        generalSkills:'',
        description:'',
        consultant: [
        ]
    });

    const [ displaySocialInputs, toggleSocialInputs ] = useState(false);


    const { 
        name,
        website,
        address,
        digit,
        generalSkills,
        description,
        consultant
    } = formData;

    return (
    <>
      <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form">
        <div className="form-group">
          <select name="status">
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text"
            >Give us an idea of where you are at in your career</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" />
          <small className="form-text"
            >Could be your own company or one you work for</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Digit" name="digit" />
          <small className="form-text"
            >Could be your own company or one you work for</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" />
          <small className="form-text"
            >Could be your own or a company website</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Adresse" name="address" />
          <small className="form-text"
            >City & state suggested (eg. Boston, MA)</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Compétences du manager" name="generalSkills" />
          <small className="form-text"
            >S'il vous plaît utiliser des virgules après chaque compétences (exemple:
            HTML,CSS,JavaScript,PHP)</small
          >
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
          />
          <small className="form-text"
            >If you want your latest repos and a Github link, include your
            username</small
          >
        </div>
        <div className="form-group">
          <textarea placeholder="Description" name="bio"></textarea>
          <small className="form-text">Dites-nous en plus à propos de vous</small>
        </div>

        <div className="my-2">
          <button onClick={() => toggleSocialInputs(!displaySocialInputs) }  type="button" className="btn btn-light">
            Ajouter vos réseaux sociaux
          </button>
          <span>Optionnel</span>
        </div>

        {displaySocialInputs && <>
        <div className="form-group social-input">
          <i className="fab fa-twitter fa-2x"></i>
          <input type="text" placeholder="Twitter URL" name="twitter" />
        </div>

        <div className="form-group social-input">
          <i class="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" name="facebook" />
        </div>

        <div className="form-group social-input">
          <i class="fab fa-youtube fa-2x"></i>
          <input type="text" placeholder="YouTube URL" name="youtube" />
        </div>

        <div className="form-group social-input">
          <i class="fab fa-linkedin fa-2x"></i>
          <input type="text" placeholder="Linkedin URL" name="linkedin" />
        </div>

        <div className="form-group social-input">
          <i class="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram" />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
        
        </>}
      </form>
     </>
    )
}

CreateProfile.propTypes = {

}

export default CreateProfile
