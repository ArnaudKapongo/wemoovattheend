import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history })=> {

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

    const onChange = e => setFormData({
      ...formData, [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  }

    return (
    <>
      <h1 className="large text-primary">
       Création de votre profil
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> 
        Recueillons quelques informations pour la présentation de votre profil
      </p>
      <small>* = Les champs requis</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
         
        </div>
        <div className="form-group">
          <input type="text" placeholder="Société" name="name" value={name} onChange={ e => onChange(e)} />
          <small className="form-text"
            >Le nom de la compagnie</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Numéro de téléphone" name="digit"  value={digit}  onChange={ e => onChange(e)}  />
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
            HTML,CSS,JavaScript,PHP)</small
          >
        </div>
        <div className="form-group">
          <textarea placeholder="Description" name="description" value={description} onChange={ e => onChange(e)} ></textarea>
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

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired

}

export default connect(null, { createProfile })(withRouter(CreateProfile))
