import React from 'react';

import CButton from 'carbon-components-react/lib/components/Button/';
import CTextInput from 'carbon-components-react/lib/components/TextInput';
import CForm from 'carbon-components-react/lib/components/Form';
import COrderedList from 'carbon-components-react/lib/components/OrderedList';
import CListItem from 'carbon-components-react/lib/components/ListItem';

import '../node_modules/carbon-components/css/carbon-components.css'
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
      <CListItem style= {{ textDecoration: 'line-through'} }> Test Completed</CListItem>
   </CForm>
  
    );
  }
}
export default App;