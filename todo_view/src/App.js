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
     </div>      
    );
  }
}

export default App;