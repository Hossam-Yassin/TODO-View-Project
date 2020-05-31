import React from 'react';

import { connect } from 'react-redux';
import { completeTodo, deleteTodo, publish } from '../actions/actions';

import { ThumbsUp16, TrashCan16 } from '@carbon/icons-react';

import COrderedList from 'carbon-components-react/lib/components/OrderedList';
import CListItem from 'carbon-components-react/lib/components/ListItem';


class ViewList extends React.Component {

  deleteTODO(id) {
    let url = 'http://localhost:81/todoapp/api/todo/' + id + '/';
    fetch(url, {
      method: 'DELETE',
      headers: {
        'x-gateway-apikey': 'ConfiguredValue',
        'csrf-token': 'CrossSiteRequestForgery_Token'
      }
    }).then((resp) => {
      if (resp.status === 204) { //Success Flow
        this.props.deleteTodo(id);
      } else { //Failure Flow
        console.log('http://localhost:81/todoapp/api/todo/ Complete TODO Failed : ' + resp.status);
      }
    }).catch( (err) => {
      console.log(err);
    })
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
    }).then((resp) => {
      if (resp.status === 200) { //Success Flow
        this.props.completeTodo(id);
      } else { //Failure Flow
        console.log('http://localhost:81/todoapp/api/todo/ Complete TODO Failed : ' + resp.status);
      }
    }).catch( (err) => {
      console.log(err);
    })
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
        this.props.publish(data.todos);
      }).catch( (err) => {
        console.log(err);
      })
  }

  render() {

    this.deleteTODO = this.deleteTODO.bind(this);
    this.completeTODO = this.completeTODO.bind(this);


    return (
      <COrderedList>
        {
          this.props.todos.map(
            (todo, index) =>
              <CListItem  >
                <div class="column App" style={{ textDecoration: todo.status == 'Completed' ? "line-through" : "" }} class="column">{todo.description}</div>
                <div  >
                  <ThumbsUp16 onClick={() => this.completeTODO(todo.id)} /> &emsp;
                  <TrashCan16 onClick={() => this.deleteTODO(todo.id)} />
                  <br /><br />
                </div>
              </CListItem>
          )
        }
      </COrderedList>
    );
  }
}

function mapStateToProps(state) {
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
export default connect(mapStateToProps, mapDispatchToProps)(ViewList);