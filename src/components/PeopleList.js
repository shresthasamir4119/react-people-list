import React, {Component} from 'react';

class PeopleList extends Component{
	render(){
		const {id, firstName, lastName} = this.props.people;
  	return (
  		<div style ={this.divStyle} onClick = {this.props.show.bind(this,id-1)}>
  			<p>
  			{firstName} {lastName}
  			</p>
  			
  		</div>
  		)
	}

  divStyle = {
    cursor:'pointer',
    padding : '10px 10px',
    borderBottom : '1px #000 dashed',
    background : '#ddd',
    color : '#222'
  }
}

export default PeopleList;