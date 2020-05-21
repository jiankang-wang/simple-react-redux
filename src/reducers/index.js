import { combineReducers } from 'redux'
import todos from './todos'
import filter from './filter'
import text from './filter'

export default combineReducers({
  todos,
  filter,
  text
})

// !!!!: 没有拆分-start
// import { ADD_TODO, TOGGLE_TODO, SET_FILTER , SET_TODO_TEXT } from '../action/actionType'
// 初始化默认state
// const initialState = {
//   todos: [],
//   filter: 'all',
//   text: ''
// }

// Reducer
// const todoApp = (state = initialState, action) => {
//   switch(action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             id: action.id,
//             text: action.text,
//             completed: false
//           }
//         ]
//       }
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map(todo => {
//           return todo.id === action.id ? ({ ...todo, completed: !todo.completed }) : todo
//         })
//       }
//     case SET_FILTER:
//       return {
//         ...state,
//         filter: action.filter
//       }
//     case SET_TODO_TEXT:
//       return {
//         ...state,
//         text: action.text
//       }
//     default:
//       return state
//   }
// }

// export default todoApp
// !!!!:没有拆分-end