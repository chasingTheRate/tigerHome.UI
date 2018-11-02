import React from 'react';
import './blind.scss';

var Blind = (props) => {
  let innerCirClassName = 'inner-circle';

  if(props.blind.blindState == 'open') {
    innerCirClassName += ' open';
  } else if (props.blind.blindState == 'is-active'){
    innerCirClassName += ' is-active';
  }

  const handleClick = (e) => {
    e.stopPropagation();
    props.didClick(props.blind.blindId)
  }

  const didClickCell = (e) => {
    props.onEdit(props.blind)
  }

  return (
      <li className="blind-container" onClick={ didClickCell }>
        <div className="blind-texts-container">
          <div className="blind-text-container blind-description">{ props.blind.blindName }</div>
          <div className="blind-text-container blind-room">{ props.blind.room }</div>
        </div>
        <div className="blind-img-container">
          <button onClick={ handleClick }>
            <svg>
              <circle className="outer-circle" cx="25" cy="25" r="20"/>
              <circle className={ innerCirClassName } cx="25" cy="25" r="15"/>
            </svg>
          </button>
        </div>
      </li>
  )
}

export default Blind;