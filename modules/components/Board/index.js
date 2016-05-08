import React from 'react'
import { header } from './styles.css'
import Title from 'react-title-component'
import Cell from '../Cell/'

class Board extends React.Component {
  renderCells() {
    let cells = [];
    for (let i=0; i<81; i++)
    {
      cells.push(<Cell key={i} />);
    }

    return cells;
  }
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Game!`}/>
        <h2 className={header}>Game of sudoku!</h2>
        {this.renderCells()}
      </div>
    )
  }

}

export default Board;
