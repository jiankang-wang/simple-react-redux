import React, { Component } from 'react'

export default class AddTodo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handlerClick = () => {
    const { text } = this.state
    const { addTodo } = this.props
    addTodo(text)
  }

  handlerChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const { text } = this.state
    return (
      <div>
        <input value={text} onChange={ this.handlerChange } />
        <button onClick={ this.handlerClick }>Add</button>
      </div>
    )
  }
}
