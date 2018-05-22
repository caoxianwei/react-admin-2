import React from 'react';

class pageTitle extends React.Component {
  componentWillMount() {
    document.title = this.props.title + 'HJ';
  }
  render() {
    return (
      <div className="row">
	    <div className="col-md-12">
	      <h1 className="page-header">{this.props.title}</h1>
	      {this.props.children}
	    </div>
	  </div>
    );
  }
}
export default pageTitle