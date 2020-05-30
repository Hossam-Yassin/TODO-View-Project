import React from 'react';

import { ThumbsUp16, TrashCan16 } from '@carbon/icons-react';

import CButton from 'carbon-components-react/lib/components/Button/';
import CTextInput from 'carbon-components-react/lib/components/TextInput';
import CForm from 'carbon-components-react/lib/components/Form';
import COrderedList from 'carbon-components-react/lib/components/OrderedList';
import CListItem from 'carbon-components-react/lib/components/ListItem';

import '../node_modules/carbon-components/css/carbon-components.css';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div class="row App" >
        <TODO_FORM />
        <br/><br/><br/><br/>
        <TODO_LIST_VIEW />

      </div>
    );
  }


}

class TODO_FORM extends React.Component {

  addTODO(event) {
    var text = document.getElementById('todo_desr').value;
    fetch("http://localhost:81/todoapp/api/todo/", {
      method: "POST",
      body: JSON.stringify({
        description: text
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    event.preventDefault();
  }

  render() {
    return (
      <CForm class="App" onSubmit={this.addTODO} >
        <br />
        <legend class="h1"> TODO APPLICATION </legend>
        <br />
        <div class="form-group">
          <div >
            <div>
              <CTextInput id="todo_desr" maxLength="50" name="description" placeholder="Todo Description" type="text" />
              <CButton class="bx--btn" type="submit" >Add TODO</CButton>
            </div>
          </div>
        </div>
      </CForm>
    );
  }

}

class TODO_LIST_VIEW extends React.Component {

  constructor() {
    super();
    this.state = {
      list_todos: []
    }
  }

  deleteTODO(id) {
    let url = 'http://localhost:81/todoapp/api/todo/' + id + '/';
    fetch(url, {
      method: 'DELETE',
      headers: {
        'x-gateway-apikey': 'ConfiguredValue',
        'csrf-token': 'CrossSiteRequestForgery_Token'
      }
    })
      .then(() => {
        this.state.list_todos.map(
          (todo, index) => {
            if (todo.id === id) {
              this.state.list_todos.splice(index, 1);
            }
          }
        )
        this.setState({ list_todos: this.state.list_todos })
      });
  };

  completeTODO(id) {
    let url = 'http://localhost:81/todoapp/api/todo/' + id + '/';
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-gateway-apikey': 'ConfiguredValue',
        'csrf-token': 'CrossSiteRequestForgery_Token'
      },
      body: JSON.stringify({
        status: 'Completed'
      })
    }).then(() => {
      this.state.list_todos.map(
        (todo, index) => {
          if (todo.id === id) {
            todo.status = 'Completed';
          }
        }
      )
      this.setState({ list_todos: this.state.list_todos })
    });
  };

  componentDidMount() {
    let url = 'http://localhost:81/todoapp/api/todos/';
    fetch(url, {
      method: 'GET',
      headers: {
        'x-gateway-apikey': 'ConfiguredValue',
        'csrf-token': 'CrossSiteRequestForgery_Token'
      }
    })
      .then(response => response.json())
      .then((data) => {
        this.setState({ list_todos: data.todos })
      })
  }


  render() {
    return (
      <COrderedList>
        {
          this.state.list_todos.map(
            (todo, index) =>
              <CListItem  >
                <div style={{ textDecoration: todo.status == 'Completed' ? "line-through" : "" }} class="column">{todo.description}</div>
                <div class="column">
                  <ThumbsUp16 onClick={() => this.completeTODO(todo.id)} /> &emsp;
                  <TrashCan16 onClick={() => this.deleteTODO(todo.id)} />
                </div>
                <br />
              </CListItem>
          )
        }
      </COrderedList>
    );
  }

}
export default App;