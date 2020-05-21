import React, { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const todos = [
  {
    id: 0,
    text: 'react',
    completed: true
  },
  {
    id: 1,
    text: 'learn react',
    completed: false
  },
  {
    id: 2,
    text: 'repeat learn react',
    completed: false
  }
]

const filter = 'all'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: todos,
      filter: filter
    }
    this.nextTodoId = 3
  }

  getVisibleTodos = () => {
    const { filter, todos } = this.state
    return todos.filter(item => {
      if(filter === 'active') {
        return !item.completed
      } else if (filter === 'completed') {
        return item.completed
      } else {
        return true
      }
    })
  }

  addTodo = (text) => {
    const { todos } = this.state
    this.setState({
      todos: [
        ...todos,
        {
          id: this.nextTodoId++,
          text: text,
          completed: false
        }
      ]
    })
  }

  toggleTodo = id => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(item => {
        return item.id === id ? ({...item, completed: !item.completed}) : item
      })
    })
  }

  setVisibilityFilter = filter => {
    this.setState({
      filter
    })
  }

  render() {
    const { todos, filter } = this.state
    return (
      <div>
          <AddTodo addTodo={ this.addTodo } />
          <TodoList todos={ this.getVisibleTodos(todos) } toggleTodo={this.toggleTodo} />
          <Footer filter={ filter } setVisibilityFilter={ this.setVisibilityFilter } />
      </div>
    )
  }
}
