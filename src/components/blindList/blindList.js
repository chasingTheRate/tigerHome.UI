import React from 'react';
import BlindCell from '../blindCell/blindCell';


const BlindList = ({ blinds, blindDidChangeState }) => 
  blinds.map( blind  => {
    return <BlindCell key={ blind.id } blind={ blind } onStateChange={ blindDidChangeState }></BlindCell>
  })

export default BlindList;