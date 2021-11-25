import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {  Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getConsultants, getConsultantsByCompany } from '../../actions/consultants';


const Rating = ({ getConsultants , getConsultantsByCompany, consultant: { consultants, loading }, auth, match  }) => {

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
        strength:'',
        ratingSending: ''
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

    const history = useHistory();

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

    const onSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(formData, 'rating');
       alert('La notation a bien été prise en compte');
       setRatingcom(null);
       setRatingaut(null);
       setRatingstr(null);
       setRatingrig(null);
       setRatingpon(null);
       setRatingpro(null);
       setRatingskillstechnical(null);
       setRatingskillsfunctional(null);
       setRatingtec(null);
       setRatingtra(null);
       history.push("/dashboard");
    }

    const edited = false;

    return (
        
        <div className='container-app rating-container'>
            <Link to="/dashboard" className="back"> Retour</Link>
            <form onSubmit={onSubmit}>
            <select name="month" value={month} onChange={ e => onChange(e)}>
                <option value="">Mois</option>
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
            <div className="presentation">    <span className="be">Savoir Être</span>
               
            </div>
        
            <span className="line"></span>
            <div className="container-star first">
            <span className="title-star communicationfontSize">Communication</span>
          {

          //  edited ? (
                
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="communication" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingcom(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingcom ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })
          /*  ) : (
              


            ) */


          }
            </div>
            <div className="container-star">
            <span className="title-star">Autonomie</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="autonomy" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingaut(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingaut ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
            </div>
            <div className="container-star">
            <span className="title-star">Force de proposition</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="strength" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingstr(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingstr ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
            </div>
            <div className="container-star">
            <span className="title-star">Rigueur</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="rigor" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingrig(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingrig ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
            </div>
            <div className="container-star">
            <span className="title-star">Ponctualité</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="punctuality" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingpon(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingpon ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
            </div>
            <div className="textend">
            <textarea
            value={note}
            onChange={e => onChange(e)}
            name="note"
            cols="50"
            rows="5"
            placeholder="Savoir être"></textarea>
            </div>

             {/**  dd */}

             <div>Savoir Être</div>
           
            <div className="container-star second">
            <span className="title-star">Progression</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="progress" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingpro(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingpro ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
            </div>
            <div className="container-star">
            <span className="title-star">Compétences fonctionnel</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="skillsfunctional" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingskillsfunctional(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingskillsfunctional ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
            </div>
            <div className="container-star" >
            <span className="title-star">Réalisation technique</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="realisation" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingtec(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingtec ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
            </div>
            <div className="container-star" >
            <span className="title-star">Transfert de compétence</span>
          {
            [...Array(5)].map((star, index) => {

              const ratingValue = index + 1;

              return <label> 
                     <input type="radio" name="transfert" value={ratingValue} onChange={ e => onChange(e)} onClick={() => setRatingtra(ratingValue)}/>
                     <FaStar className="star" color={ratingValue <= ratingtra ? '#ffc107' : '#e4e5e9'} size={50} />
                     </label>;
            })}
            </div>
           
            <div>
            <textarea
            value={remark}
            onChange={e => onChange(e)}
            name="remark"
            cols="50"
            rows="5"
            placeholder="Savoir être"></textarea>
            </div>

            <Button
            variant="contained"
            color="primary"
            
            type="submit"
            style={{
                marginTop: 30,
                marginBottom: 5
            }}
            >
               Valider
            </Button>
            
            </form>
        </div> 
    )
}

Rating.propTypes = {
  getConsultants: PropTypes.func.isRequired,
  getConsultantsByCompany: PropTypes.func.isRequired,
  consultant: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  consultant: state.consultant,
  auth: state.auth
});

export default connect(mapStateToProps, { })(Rating)