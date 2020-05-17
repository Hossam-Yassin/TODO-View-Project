import React from 'react';
import CButton from 'carbon-components-react/lib/components/Button';
import CTextInput from 'carbon-components-react/lib/components/TextInput';
import CForm from 'carbon-components-react/lib/components/Form';

import logo from './logo.svg';
import './App.css';

class App  extends React.Component {
  render() {
    return (
      <div class="_2BSER search-header__form-wrapper">
        <div align='center' >
          <h1 > TODO Application </h1>
        </div>
        <CForm method="post" action="http://localhost:81/todoapp/api/todo">
          <div align='center' >
            <CTextInput  id="todoID" maxLength="40" placeholder="TODO Description"/>
            <CButton > Add TODO </CButton>
          </div>
        </CForm>
        <br/>

        <TODO_LIST_COMP/>

     </div>      
    );
  }
}

class TODO_LIST_COMP extends React.Component{
  
  constructor(){
    super();
    this.state = {
        list_todos: []
    }
  } 

  componentDidMount() {
    let url = 'http://localhost:81/todoapp/api/todos';

    fetch(url , {
      method: 'GET',
      headers: {
        'x-gateway-apikey': 'ConfiguredValue',
        'csrf-token': 'CrossSiteRequestForgery_Token'
      }
    })
    .then(response => response.json())
    .then((data)=>{
      this.setState({list_todos: data.todos})
    })
  }
  
  render() {
      return (
        <div>
          <ul>
                {this.list_todos.map(s => (<li>{s.ID}</li>))}
            </ul>

         
        </div>
      );
  }
}

export default App;