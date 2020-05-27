import React from 'react';

import CButton from 'carbon-components-react/lib/components/Button/';
import CTextInput from 'carbon-components-react/lib/components/TextInput';
import CForm from 'carbon-components-react/lib/components/Form';
import COrderedList from 'carbon-components-react/lib/components/OrderedList';
import CListItem from 'carbon-components-react/lib/components/ListItem';
import { ThumbsUp16 , TrashCan16} from '@carbon/icons-react';

import '../node_modules/carbon-components/css/carbon-components.css';
import './App.css';


class App  extends React.Component {
  render() {
    return (
   <CForm class="App" action="http://localhost:81/todoapp/api/todo" method="post"  id="todo_form">
      <br/>
      <legend class="h4"> TODO APPLICATION </legend>
      <br/>
      <div class="form-group">
         <div >
            <div>
               <CTextInput  maxLength="30" name="description" placeholder="Todo Description" type="text"/>
               <CButton  class="bx--btn" type="submit" >Add TODO</CButton>
            </div>
         </div>
      </div> 

      <br/><br/><br/><br/>
      <TODO_LIST_COMP/>
   </CForm>
  
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

        <div class="row App" >
        <COrderedList>
          {
          this.state.list_todos.map(
            (todo, index) =>  
            <CListItem> 
              <div class="column">{todo.description}</div>
              <div class="column"><ThumbsUp16 /> &emsp; <TrashCan16 /> </div>
              <br/>
            </CListItem>
            )
            
          }
        </COrderedList> 
      </div>
      );
   }
}

export default App;