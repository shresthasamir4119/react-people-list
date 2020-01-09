import React from 'react';
import PeopleList from './PeopleList';

class People extends React.Component{
	render(){
		return this.props.name.map((people) =>(
			<div key = {people.id}>
			<PeopleList people = {people}  showDetail = {this.props.showDetail} show = {this.props.show} />
			</div>
			));
	}
}

export default People;