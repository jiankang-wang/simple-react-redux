import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const { filter, setVisibilityFilter } = this.props
    return (
      <div>
        <span>show</span>
        <button disabled={ filter === 'all' } onClick={ () =>  setVisibilityFilter('all') }  >ALL</button>
        <button disabled ={ filter === 'active' } onClick={ () => setVisibilityFilter('active') }>Active</button>
        <button disabled={ filter === 'completed' } onClick={ () => setVisibilityFilter('completed') } >Completed</button>
      </div>
    )
  }
}
