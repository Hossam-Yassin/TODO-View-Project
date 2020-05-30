let initialState = {
  todos: []
}

function TODOReducer(state = initialState, action) {
  switch (action.type) {

    case "ADD_TODO":
      var todo = { description: action.text, status: 'New' };
      var newState = Object.assign({}, state, {
        todos: [...state.todos, todo]
      });
      return newState;

    case "COMPLETE_TODO":
      var todos = Object.assign({}, state.todos);
      todos.map(
        (todo, index) => {
          if (todo.id === action.id) {
            todo.status = 'Completed';
          }
        }
      )
      var newState = Object.assign({}, todos);
      return newState;

    case "DELETE_TODO":
      var todos = Object.assign({}, state.todos);
      todos.map(
        (todo, index) => {
          if (todo.id === action.id) {
            todos.splice(index, 1);
          }
        }
      )
      return Object.assign({}, todos);

    case "PUBLISH_TODOS":
      return Object.assign({}, action.list);

    default:
      return state;
  }
};

export default TODOReducer;