import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addConsultant } from '../../actions/profile';

const AddConsultant = ({ addConsultant, history }) => {

    //current: false

    // const [toDateDisabled, toggleDisabled ] = useState(false);

    const [ formData, setFormData ] = useState({
        month: '',
        name: '',
        surname: '',
        skillstechnical: '',
        skillsfunctional: '',
        progress: '',
        realisation: '',
        transfert: '',
        remark: '',
        note: '',
        rigor:'',
        punctuality: '',
        autonomy: '',
        communication: '',
        strength:''
    });

    const { month, 
        name, 
        surname, 
        skillsfunctional, 
        skillstechnical, 
        progress, 
        realisation, 
        transfert, 
        remark, 
        note, 
        rigor, 
        punctuality,
        autonomy,
        communication,
        strength } = formData;

    const onChange = e => setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    

    return (
    <>
      <h1 className="large text-primary">
       Noter un consultant
      </h1>
      
      <small>* = required field</small>
      <form className="form" onSubmit={e => {
          e.preventDefault();
          addConsultant(formData, history);
      }}>
        <div className="form-group">
          <input type="text" placeholder="Nom du candidat" name="name" required  value={name} onChange={ e => onChange(e)} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Prénom du candidat" name="surname" required value={surname} onChange={ e => onChange(e)}  />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Mois" name="month" value={month} onChange={ e => onChange(e)} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Communication" name="communication" value={communication} onChange={ e => onChange(e)} />
        </div>
        <div className="form-group">
            <input type="number" placeholder="Autonomie" name="autonomy" value={autonomy} onChange={ e => onChange(e)}  />
        </div>
        <div className="form-group">
            <input type="number" placeholder="Force de proposition" name="strength" value={strength} onChange={ e => onChange(e)}  />
        </div>
        <div className="form-group">
            <input type="number" placeholder="Rigueur" name="rigor" value={rigor} onChange={ e => onChange(e)} />
        </div>
        <div className="form-group">
            <input type="number" placeholder="Ponctualité" name="punctuality" value={punctuality} onChange={ e => onChange(e)}  />
        </div>
        <div className="form-group">
          <textarea
            value={note}
            onChange={e => onChange(e)}
            name="note"
            cols="30"
            rows="5"
            placeholder="Savoir être"></textarea>
        </div>

        <div className="form-group">
          <input type="number" placeholder="Progression" name="progress" value={progress} onChange={ e => onChange(e)}  />
        </div>
        <div className="form-group">
            <input type="number" placeholder="Compétences technique" name="skillstechnical" value={skillstechnical} onChange={ e => onChange(e)}   />
        </div>
        <div className="form-group">
            <input type="number" placeholder="Compétence fonctionnel" name="skillsfunctional" value={skillsfunctional} onChange={ e => onChange(e) }/>
        </div>
        <div className="form-group">
            <input type="number" placeholder="Réalisation technique" name="realisation" value={realisation} onChange={ e => onChange(e)}/>
        </div>
        <div className="form-group">
            <input type="number" placeholder="Transfert de compétences" name="transfert" value={transfert} onChange={ e => onChange(e)} />
        </div>
        <div className="form-group">
          <textarea
            value={remark}
            onChange={e => onChange(e)}
            name="remark"
            cols="30"
            rows="5"
            placeholder="Savoir faire"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">Retour</a>
      </form>
        </>
    )
}

AddConsultant.propTypes = {
    addConsultant: PropTypes.func.isRequired
}

export default connect(null, { addConsultant })(AddConsultant)
