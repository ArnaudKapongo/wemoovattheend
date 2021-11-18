import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteConsultant } from '../../actions/profile';

const Consultant = ({ consultant, deleteConsultant }) => {

    const consultants = consultant.map(cons => (
        <tr key={cons._id}>
            <td>{cons.name}</td>
            <td>{cons.surname}</td>
            <td>{cons.month}</td>
            <td>{cons.communication}</td>
            <td>{cons.autonomy}</td>
            <td>{cons.strength}</td>
            <td>{cons.rigor}</td>
            <td>{cons.punctuality}</td>
            <td>{cons.progress}</td>
            <td>{cons.skillstechnical}</td>
            <td>{cons.skillsfunctional}</td>
            <td>{cons.transfert}</td>
    <td>{cons.realisation}</td> 
            <td><button onClick={() => deleteConsultant(cons._id)} className='btn btn-danger'>Supprimer</button></td>
            <td> {/*<button className='btn btn-success'>Visualiser</button> */} <Link to={`/dashboard/${cons._id}`} className="btn btn-success"
          ><i class="fab fa-black-tie text-primary"></i> Visualiser </Link></td>
      </tr>
    ));

    return (
        <>
          <h2 className="my-2">Consultants</h2>

          <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Month</th>
                    <th>communication</th>
                    <th>Autonomie</th>
                    <th>Force de proposition</th>
                    <th>Rigueur</th>
                    <th>Ponctualité</th>
                    <th>Progression</th>
                    <th>Compétences techniques</th>
                    <th>Compétences fonctionnel</th>
                    <th>Réalisation technique</th>
                    <th>Transfert de compétence</th>
                </tr>
            </thead>
            <tbody>
                {consultants}
            </tbody>
          </table>  
        </>
    )
}

Consultant.propTypes = {
    consultant:  PropTypes.array.isRequired,
    deleteConsultant: PropTypes.func.isRequired
}

export default connect(null, { deleteConsultant })(Consultant)
