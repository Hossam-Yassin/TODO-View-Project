export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const PUBLISH_TODOS = 'PUBLISH_TODOS'

export function addTodo(todo) {
  return { type: ADD_TODO, todo:todo }
}

export function completeTodo(todoID) {
  return { type: COMPLETE_TODO, id:todoID }
}

export function deleteTodo(todoID) {
  return { type: DELETE_TODO, id:todoID }
}

export function publish(todos){
  return { type: PUBLISH_TODOS, list:todos }
}