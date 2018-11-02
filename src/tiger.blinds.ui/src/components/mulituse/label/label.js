import React from 'react';
import './label.scss';

const Label = (props) => {
  
  const style = {
    width: props.width || "100%",
    minWidth: props.minWidth || "0",
    justifyContent: props.justifyContent,
  };

  return (
    <div className="label-container" style={ style }>
      {/* <div className="label-text">{ props.title }</div> */}
      <label className="label-text" htmlFor={ props.htmlFor }>{ props.title }</label>
    </div>
  );
}

export default Label;