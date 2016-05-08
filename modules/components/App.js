import React from 'react'
import Title from 'react-title-component'

class App extends React.Component {
  render() {
    return (
      <div>
        <Title render="Good Sudoku"/>
        <h1>Good Sudoku.</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App
