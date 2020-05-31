import React from 'react';

import { connect } from 'react-redux';

import CButton from 'carbon-components-react/lib/components/Button';
import CTextInput from 'carbon-components-react/lib/components/TextInput';
import CForm from 'carbon-components-react/lib/components/Form';

import { addTodo } from '../actions/actions';

class AddForm extends React.Component {

  addTODO(e) {
    e.preventDefault();
    var text = document.getElementById('todo_desr').value;
    var res;
    var id = '';
    fetch("http://localhost:81/todoapp/api/todo/", {
      method: "POST",
      body: JSON.stringify({
        description: text
      }),
      headers: {
        "Content-Type": "application/json",
        'x-gateway-apikey': 'ConfiguredValue',
        'csrf-token': 'CrossSiteRequestForgery_Token'
      }
    }).then((resp) => {
      if(resp.status===201){ //Success Flow
        id = resp.headers.get('id');
        var todo = {id : id , description : text , status : 'New'};
        this.props.addToDo(todo);
      }else{ //Failure Flow
        console.log('http://localhost:81/todoapp/api/todo/ Failed with response code : '  + resp.status);
      }
    }).catch( (err) => {
      console.log(err);
    })

    return false;
  }

  render() {

    this.addTODO = this.addTODO.bind(this);

    return (
      <CForm class="App" onSubmit={this.addTODO}  >
        <br />
        <legend class="h1"> TODO APPLICATION </legend>
        <br />
        <div class="form-group">
          <CTextInput maxLength="50" id='todo_desr' name="description" placeholder="Todo Description" type="text" />
          <CButton class="bx--btn" type="submit">Add TODO</CButton>
        </div>
      </CForm>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addToDo: (todo) => dispatch(addTodo(todo))
  };
}

export default connect(null, mapDispatchToProps)(AddForm);