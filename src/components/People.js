import React from 'react';
import PeopleList from './PeopleList';

class People extends React.Component{
	render(){
		return this.props.name.map((people) =>(
			<PeopleList people = {people} key = {people.id} showDetail = {this.props.showDetail} show = {this.props.show} />
			));
	}
}

export default People;