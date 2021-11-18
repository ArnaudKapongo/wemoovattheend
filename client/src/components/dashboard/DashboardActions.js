import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (
      <div className="dash-buttons">
        <Link to="/edit-profile" className="btn btn-light"
          ><i class="fas fa-user-circle text-primary"></i> Modifier le profil</Link>
        <Link to="/add-consultant" className="btn btn-light"
          ><i class="fab fa-black-tie text-primary"></i> Ajouter un consultant</Link>
      </div>
    )
}

export default DashboardActions
