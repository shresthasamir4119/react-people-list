import React from 'react';

class Details extends React.Component{
	buttonStyle = {
		border:'none',
		background:'#333',
		color:'#ddd',
		padding:'10px',
		margin:'20px 0 0 0'
	}
	render(){
		return (
			<div className = 'detail'>
				<p>
				<img className='profilepic' src={this.props.data.profileImage} alt="pp"/>
				First Name : {this.props.data.firstName}<br/>
				Last Name : {this.props.data.lastName}<br/>
				Email : {this.props.data.email}<br/>
				</p>
				<button style = {this.buttonStyle} onClick = {this.props.back}>Back</button>
			</div>
		)
	}
}

export default Details;