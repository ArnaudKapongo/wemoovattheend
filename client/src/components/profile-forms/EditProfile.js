import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({ profile: { profile, loading }, createProfile, getCurrentProfile, history })=> {

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

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            name: loading || !profile.name ? '' : profile.name,
            website: loading || !profile.website ? '' : profile.website,
            address: loading || !profile.address ? '' : profile.address,
            digit: loading || !profile.digit ? '' : profile.digit,
            generalSkills: loading || !profile.generalSkills ? '' : profile.generalSkills,
            description: loading || !profile.description ? '' : profile.description
        });
    }, [loading]);

    const { 
        name,
        website,
        address,
        digit,
        generalSkills,
        description,
        consultant
    } = formData;

    const onChange = e => setFormData({
      ...formData, [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  }

    return (
    <>
      <h1 className="large text-primary">
       Mise à jour de votre profil
      </h1>
      <small>* = Les champs requis</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
         { /* <select name="status">
            <option value="0">* Sélectionner votre statut</option>
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
    >Votre statut au sein de votre entreprise.</small>  */}
        </div>
        <div className="form-group">
          <input type="text" placeholder="Société" name="name" value={name} onChange={ e => onChange(e)} />
          <small className="form-text"
            >Le nom de la compagnie</small>
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Numéro de téléphone" name="digit"  value={digit}  onChange={ e => onChange(e)}  />
          <small className="form-text"
            >Renseignez votre contact mobile professionnelle</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Site internet" name="website"  value={website} onChange={ e => onChange(e)}  />
          <small className="form-text"
            >Lien du site internet de l'entreprise</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Adresse" name="address" value={address} onChange={ e => onChange(e)}  />
          <small className="form-text"
            >Localisation de la société</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Compétences du manager" name="generalSkills"  value={generalSkills} onChange={ e => onChange(e)}  />
          <small className="form-text"
            >S'il vous plaît utiliser des virgules après chaque compétences (exemple:
            HTML,CSS,JavaScript,PHP)</small>
        </div>
        <div className="form-group">
          <textarea  placeholder="Description" name="description" value={description} onChange={ e => onChange(e)}></textarea>
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
        </>}
        <input type="submit" className="btn btn-primary my-1" />
        <Link to="/dashboard" className="btn btn-light my-1">Retour</Link>
      </form>
     </>
    )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
});


export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile))
