import React from 'react'
import { IndexLink, Link } from 'react-router'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render="Good Sudoku"/>
        <h1>Good Sudoku.</h1>
        <ul>
          <li><IndexLink to="/">Home</IndexLink></li>
          <li><Link to="/dragon">A DRAGON!</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
