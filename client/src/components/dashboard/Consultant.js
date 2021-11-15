import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteConsultant } from '../../actions/profile';

const Consultant = ({ consultant, deleteConsultant }) => {

    const consultants = consultant.map(cons => (
        <tr key={cons._id}>
            <td>{cons.name}</td>
            <td>{cons.surname}</td>
            <td>{cons.month}</td>
            <td>{cons.communication}</td>
            <td>{cons.autonomy}</td>
            {/*<td>{cons.strength}</td>
            <td>{cons.rigor}</td>
            <td>{cons.punctuality}</td>
            <td>{cons.progress}</td>
            <td>{cons.skillstechnical}</td>
            <td>{cons.skillsfunctional}</td>
            <td>{cons.transfert}</td>
    <td>{cons.realisation}</td> */}
            <td><button onClick={() => deleteConsultant(cons._id)} className='btn btn-danger'>Supprimer</button></td>
      </tr>
    ));


    return (
        <>
          <h2 className="my-2">Consultants</h2>
          <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th className="hide-sm">Surname</th>
                    <th className="hide-sm">Month</th>
                    <th className="hide-sm">communication</th>
                    <th className="hide-sm">Autonomie</th>
                    {/*<th className="hide-sm">Force de proposition</th>
                    <th className="hide-sm">Rigueur</th>
                    <th className="hide-sm">Ponctualité</th>

                    <th className="hide-sm">Progression</th>
                    <th className="hide-sm">Compétences techniques</th>
                    <th className="hide-sm">Compétences fonctionnel</th>
                    <th className="hide-sm">Réalisation technique</th>
    <th className="hide-sm">Transfert de compétence</th> */}
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
