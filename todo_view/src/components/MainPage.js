import React from 'react';

import AddForm from './AddForm'
import ViewList from './ViewList'

function MainPage() {
  return (
    <div class="row App" >
        <AddForm/>
        <br/><br/><br/><br/>
        <ViewList/>
      </div>
  );
}

export default MainPage;