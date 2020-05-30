let initialState = {
  todos: []
}

function TODOReducer(state = initialState, action) {
  var fetchedTODOS = action.list;
  switch (action.type) {

    case "ADD_TODO":
      var todo = action.todo;
      var newState = Object.assign({}, state, {
        todos: [...state.todos, todo]
      });
      return newState;

    case "COMPLETE_TODO":
      var new_state = Object.assign({}, state, {
        todos: [...state.todos]
      });

      new_state.todos.map(
        (todo, index) => {
          if (todo.id === action.id) {
            todo.status = 'Completed';
          }
        }
      )
      return new_state;

    case "DELETE_TODO":
      var new_state = Object.assign({}, state, {
        todos: [...state.todos]
      });

      new_state.todos.map(
        (todo, index) => {
          if (todo.id === action.id) {
            new_state.todos.splice(index, 1);
          }
        }
      )
      return new_state;

    case "PUBLISH_TODOS":
      var newState = Object.assign({}, {
        todos: [...action.list]
      });
      return newState;

    default:
      return state;
  }
};

export default TODOReducer;