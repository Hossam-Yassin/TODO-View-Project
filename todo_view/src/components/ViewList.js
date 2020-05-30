import React from 'react';

import { connect } from 'react-redux';

import { ThumbsUp16, TrashCan16 } from '@carbon/icons-react';

import COrderedList from 'carbon-components-react/lib/components/OrderedList';
import CListItem from 'carbon-components-react/lib/components/ListItem';

import {completeTodo , deleteTodo  , publish} from '../actions/actions';

class ViewList extends React.Component {

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
        this.props.deleteTodo(id);
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
      this.props.completeTodo(id);
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
        alert('loaded : ' + data.todos)
        this.props.publish(data.todos);
      })
  }

  render() {
    return (
      <COrderedList>
        {
          this.props.todos.map(
            (todo, index) =>
              <CListItem  >
                <div style={{ textDecoration: todo.status == 'Completed' ? "line-through" : "" }} class="column">{todo.description}</div>
                <div class="column">
                  {/* <ThumbsUp16 onClick={() => this.completeTODO(todo.id)} /> &emsp;
                  <TrashCan16 onClick={() => this.deleteTODO(todo.id)} /> */}
                </div>
                <br />
              </CListItem>
          )
        }
      </COrderedList>
    );
  }
}

function mapStateToProps(state) {
  alert('mapStateToProps :  ' + state.todos)
  
  if(state.todos===undefined)
     return {
        todos: []
     };
  return {
      todos: state.todos
   }; 
}

function mapDispatchToProps(dispatch) {
  return {
      deleteTodo: (id) => dispatch(deleteTodo(id)),
      completeTodo: (id) => dispatch(completeTodo(id)),
      publish: (todos) => dispatch(publish(todos)),
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewList);