import React from 'react';
import BlindCell from '../blindCell/blindCell';


const BlindList = ({ blinds, blindDidChangeState, onClick }) => {
  return blinds.map( blind  => (
    <BlindCell 
      key={ blind.id }
      blind={ blind }
      onStateChange={ blindDidChangeState }
      onClick={ () => onClick(blind.id) }
    />
  ));
}

export default BlindList;