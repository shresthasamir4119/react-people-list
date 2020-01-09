import React from 'react';
import People from './components/People';
import Header from './components/Header';
import Details from './components/Details';
import Search from './components/Search';

import './App.css';
import './style/style.css';

function withDetail(Component){
  return function(props) {
    if (props.state.clickedOnPeople) {
     return <Details data={props.state.data[props.state.id]} back={props.back}/>;
    }
    else {
      
      return (
        <>
        <Header />
        <Search find={props.search} />
        <Component name = {props.state.filteredData} show={props.show} />
        </>
        ); 
    }
  };
}

const EnhancedDetail = withDetail(People);

class App extends React.Component{
  back = () =>{
    this.setState({
      clickedOnPeople:false,
      id:'',
      filteredData:this.state.data,
    })
  }

  search = (text)=>{
    this.setState({
      filteredData:this.state.data.filter((data)=>{
        if(data.firstName.toLowerCase().includes(text.toLowerCase())||
          data.lastName.toLowerCase().includes(text.toLowerCase())){
          return data;
        }
        return null;
      })
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
    searchText:'',
    filteredData:[],
  }

  componentDidMount(){
    fetch('https://mock-io.herokuapp.com/users')
    .then(res => res.json())
    .then(res => this.setState({data:res, loaded: true,filteredData:res}));

  }
  render(){
    if(!this.state.loaded){
      return <div>loading...</div>
    }
    else {
      return (
        <div>
        <EnhancedDetail {...this}/>
         </div>
      );
    }
  }
}

export default App;
