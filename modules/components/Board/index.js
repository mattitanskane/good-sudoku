import React from 'react'
import { header, board } from './styles.css'
import Title from 'react-title-component'
import Cell from '../Cell/'

class Board extends React.Component {
  renderRow(row, rowIndex) {
    // Goes through all the items in the row and renders a Cell with the values
    return row.map((value, colIndex) => <Cell row={rowIndex} col={colIndex} value={value} />)
  }

  renderBoard() {
    // Goes through all the rows in the board, and renders them
    return this.props.board.map((row, rowIndex) => this.renderRow(row, rowIndex))
  }

  componentWillMount() {
    // Retrieve the selected difficulty from URL parameter
    let difficultyLevel = this.props.location.query.level
    // TODO Generate the Sudoku board for the difficulty
    console.log('Selected difficulty', difficultyLevel)
  }

  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Game!`}/>
        <h2 className={header}>Game of sudoku!</h2>
        <div className={board}>
          { this.renderBoard() }
        </div>
      </div>
    )
  }

}

Board.defaultProps = {
  // Default sudoku Board
  // TODO This should be generated based on the selected difficulty
  board: [
    [ 0, 0, 1, 0, 0, 4, 0, 2, 0 ],
    [ 0, 0, 1, 0, 0, 4, 0, 2, 0 ],
    [ 0, 0, 1, 0, 0, 4, 0, 2, 0 ],
    [ 0, 0, 1, 0, 0, 4, 0, 2, 0 ],
    [ 0, 0, 1, 0, 0, 4, 0, 2, 0 ],
    [ 0, 0, 1, 0, 0, 4, 0, 2, 0 ],
    [ 0, 0, 1, 0, 0, 4, 0, 2, 0 ],
    [ 0, 0, 1, 0, 0, 4, 0, 2, 0 ],
    [ 0, 0, 1, 0, 0, 4, 0, 2, 0 ]
  ]
}

export default Board;
