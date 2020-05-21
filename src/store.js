import { createStore } from 'redux'
import rootReducer from './reducers/index'
import { addTodo, toggleTodo, setFilter, setTodoText } from './action/index'

const store = createStore(rootReducer)

// 初始state
console.log(store.getState())

// 订阅state的变化
const unsubscrible = store.subscribe(() => {
  console.log(store.getState())
}) 

store.dispatch(addTodo('learn Vue'))
store.dispatch(toggleTodo(0))
store.dispatch(setFilter('all'))
store.dispatch(setTodoText('wjk'))

// 还可以取消订阅
unsubscrible()
