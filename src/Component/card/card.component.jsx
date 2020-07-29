import React from 'react';
import './card.component.css';


export const Card = (props) =>(
<div className = "card-container" >
   <img src={`https://robohash.org/${props.detail.id}?set=set2&size=180x180`} alt="logo" />
  <h2>{props.detail.name}</h2>
  <span>{props.detail.email}</span>
  </div>
  
  )
