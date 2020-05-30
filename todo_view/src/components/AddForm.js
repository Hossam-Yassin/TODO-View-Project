import React from 'react';

import { connect } from 'react-redux';

import CButton from 'carbon-components-react/lib/components/Button';
import CTextInput from 'carbon-components-react/lib/components/TextInput';
import CForm from 'carbon-components-react/lib/components/Form';

import {addTodo } from '../actions/actions';

class AddForm extends React.Component {

  render() {
    return (
      <CForm class="App" action="http://localhost:81/todoapp/api/todo/" method="post" >
        <br />
        <legend class="h1"> TODO APPLICATION </legend>
        <br />
        <div class="form-group">
          <CTextInput maxLength="30" name="description" placeholder="Todo Description" type="text" />
          <CButton class="bx--btn" type="submit"  onClick={this.props.addToDo}>Add TODO</CButton>
        </div>
      </CForm>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
      addToDo: () => dispatch(addTodo('Okay ya Heba '))
  };
}

export default connect(null,mapDispatchToProps)(AddForm);