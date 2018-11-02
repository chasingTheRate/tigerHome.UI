import React from 'react';
import './labelWithInputError.scss';
import Label from '../label/label';

const LabelWithInputError = (props) => {

  const handleChange = (event) => {
    props.onChange(event.target.value);
  }

  return (
    <div className="lab-inp-err-container">
      <div className="label-input-container">
        <Label 
          width="65px"
          minWidth="65px"
          justifyContent="flex-end"
          title={ props.title }></Label>
        <div className="input-container">
          <input placeholder={ props.placeHolder } value={ props.value } onChange={ handleChange }/>
        </div>
      </div>
      <div className="error-container">Error goes here.</div>
    </div>
  );
}

export default LabelWithInputError;
