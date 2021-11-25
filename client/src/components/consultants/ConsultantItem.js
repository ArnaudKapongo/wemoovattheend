import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ConsultantItem = ({ consultant: { status, avatar, surname, name, _id } }) => {

    return(
        <>
        <Link to={`/rating/${_id}`}>
        <div className='container-row' >
        <div className="container-item">
            <img className="image" src={avatar} alt={name} />
            <div className="row-description">
              <p className="ajustText">{name} {surname}</p>
              <p className="statusText">{status}</p>
            </div>
        </div> 
        </div>
        </Link>
        </>       
        )
  }     

export default ConsultantItem;