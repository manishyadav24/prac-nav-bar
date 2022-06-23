import NavComp from './components/NavComp';
import './App.css';
import {Component} from 'react';

class App extends Component {

  state = {
    details : {
       companyName : "Company name",
       navItems : ["Home","Products","About us","Login"] 
    }
  };

  render(){
  return (
    <NavComp navInfo={this.state.details}/>
  );
  }
}

export default App;
