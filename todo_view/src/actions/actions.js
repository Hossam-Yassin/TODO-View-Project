export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const PUBLISH_TODOS = 'PUBLISH_TODOS'

export function addTodo(description) {
  alert('add');
  return { type: ADD_TODO, text:description }
}

export function completeTodo(todoID) {
  alert('complete');
  return { type: COMPLETE_TODO, id:todoID }
}

export function deleteTodo(todoID) {
  alert('delete');
  return { type: DELETE_TODO, id:todoID }
}

export function publish(todos){
  alert('publish : ' + todos );
  return { type: PUBLISH_TODOS, list:todos }
}