import React from 'react';
import People from './components/People';
import Header from './components/Header';
import Details from './components/Details';

import './App.css';
import './style/style.css';

function withDetail(Component){
  return function(props) {
    console.log(props);
    if (props.state.clickedOnPeople) {
     return <Details data={props.state.data[props.state.id]} back={props.back}/>;
    }
    else {
      
      return <Component name = {props.state.data} show={props.show} />;
      
    }
  };
}

const EnhancedDetail = withDetail(People);

class App extends React.Component{
  back = () =>{
    this.setState({
      clickedOnPeople:false,
      id:'',
    })
  }
  show = (data) =>{
    this.setState({
      clickedOnPeople:true,
      id:data,
    })
  }

  state = {
    data:[],
    loaded : false,
    id:'',
    clickedOnPeople:false,
  }

  componentDidMount(){
    fetch('https://mock-io.herokuapp.com/users')
    .then(res => res.json())
    .then(res => this.setState({data:res, loaded: true}));

  }
  render(){
    if(!this.state.loaded){
      return <div>loading...</div>
    }
    else {
      return (
        <div>
        <Header />
        <EnhancedDetail {...this}/>
         </div>
      );
    }
  }
}

export default App;
