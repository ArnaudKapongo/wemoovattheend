import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
//import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addConsultant } from '../../actions/profile';
import { FaStar }  from 'react-icons/fa';
import Moment from 'react-moment';
import moment from 'moment';

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

    const [ratingcom, setRatingcom] = useState(null);
    const [ratingaut, setRatingaut] = useState(null);
    const [ratingstr, setRatingstr] = useState(null);
    const [ratingrig, setRatingrig] = useState(null);
    const [ratingpon, setRatingpon] = useState(null);
    const [ratingpro, setRatingpro] = useState(null);
    const [ratingskillstechnical, setRatingskillstechnical] = useState(null);
    const [ratingskillsfunctional, setRatingskillsfunctional] = useState(null);
    const [ratingtec, setRatingtec ] = useState(null);
    const [ratingtra, setRatingtra ] = useState(null);

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
    
    const currentDateTime = moment();

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
          <select  name="month" value={month} onChange={ e => onChange(e)}>
              <option value="Janvier">Janvier</option>
              <option value="Février">Février</option>
              <option value="Mars">Mars</option>
              <option value="Avril">Avril</option>
              <option value="Mai">Mai</option>
              <option value="Juin">Juin</option>
              <option value="Juillet">Juillet</option>
              <option value="Août">Août</option>
              <option value="Septembre">Septembre</option>
              <option value="Octobre">Octobre</option>
              <option value="Novembre">Novembre</option>
              <option value="Décembre">Décembre</option>
          </select>
        </div>
       {/* <div className="form-group"> 
          {
            <Moment format='YYYY'>{currentDateTime}</Moment>
          }
        </div> */}
        {/*<div className="form-group">
          <input type="text" placeholder="Mois" name="month" value={month} onChange={ e => onChange(e)} />
    </div>*/}
        <div className="form-group">
          <span>Communication</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="communication" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingcom(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingcom ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
        </div>
        <div className="form-group">
          <span>Autonomie</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="autonomy" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingaut(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingaut ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
        </div>
        <div className="form-group">
          <span>Force de proposition</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="strength" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingstr(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingstr ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
        </div>

        <div className="form-group">
          <span>Rigueur</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="rigor" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingrig(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingrig ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
        </div>

        <div className="form-group">
          <span>Ponctualité</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="punctuality" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingpon(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingpon ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
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
          <span>Progression</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="progress" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingpro(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingpro ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
        </div>

        <div className="form-group">
          <span>Compétences technique</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="skillstechnical" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingskillstechnical(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingskillstechnical ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
        </div>

        <div className="form-group">
          <span>Compétences fonctionnel</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="skillsfunctional" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingskillsfunctional(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingskillsfunctional ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
        </div>
        
        <div className="form-group">
          <span>Réalisation technique</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="realisation" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingtec(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingtec ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
        </div>

        <div className="form-group">
          <span>Transfert de compétence</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="transfert" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingtra(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingtra ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
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
        <Link to="/dashboard" className="btn btn-light my-1">Retour</Link>
      </form>
        </>
    )
}

AddConsultant.propTypes = {
    addConsultant: PropTypes.func.isRequired
}

export default connect(null, { addConsultant })(withRouter(AddConsultant));
