import React from 'react'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render="Good Sudoku"/>
        <h1>Good Sudoku.</h1>
        {this.props.children}
      </div>
    )
  }
})
