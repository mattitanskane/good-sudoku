import React from 'react'
import { Link } from 'react-router'
import Title from 'react-title-component'

class Home extends React.Component {

  renderRow(row) {
    return row.map((col, colIndex) => <div>{col}</div>)
  }

  renderBoard() {
    return this.props.board.map((row, rowIndex) => this.renderRow(row, rowIndex))
  }

  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Play`}/>
        <ul>
          <li><Link to="/dragon?level=1">Easy</Link></li>
          <li><Link to="/dragon?level=2">Medium</Link></li>
          <li><Link to="/dragon?level=3">Hard</Link></li>
          <li><Link to="/dragon?level=4">Very hard</Link></li>
        </ul>
        { this.renderBoard() }
      </div>
    )
  }
}

Home.defaultProps = {
  board: [
    [0, 0, 1, 0, 0, 4, 0, 2, 0],
    [0, 0, 1, 0, 0, 4, 0, 2, 0],
    [0, 0, 1, 0, 0, 4, 0, 2, 0],
    [0, 0, 1, 0, 0, 4, 0, 2, 0],
    [0, 0, 1, 0, 0, 4, 0, 2, 0],
    [0, 0, 1, 0, 0, 4, 0, 2, 0],
    [0, 0, 1, 0, 0, 4, 0, 2, 0],
    [0, 0, 1, 0, 0, 4, 0, 2, 0],
    [0, 0, 1, 0, 0, 4, 0, 2, 0]
  ]
}

export default Home
