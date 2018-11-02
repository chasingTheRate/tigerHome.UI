import React from 'react';
import './snackbar.scss';

class Snackbar extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.delay = 3000;
    this.state = {
      showing: false,
      snackBarClassName: '',
    }
  }
  show() {
    // console.log('show')
    this.snackBarClassName = 'show';
    this.setState({
      showing: true,
      snackBarClassName: 'show'
    })
    setTimeout( () => {
      this.hide();
    }, this.delay);
  }

  hide(){
    // console.log('hide');
    this.setState({
      showing: false,
      snackBarClassName: ''
    })
  }

  render() {
    return (
    <div id="snackbar" className={ this.state.snackBarClassName }>{ this.props.message }</div>
    );
  }
}

export default Snackbar;