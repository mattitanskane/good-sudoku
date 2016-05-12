import React from 'react'
const { number } = React.PropTypes
import { cell } from './styles.css'

class Cell extends React.Component {
  render() {
    return (
      <div className={cell}>
        {this.props.value}
      </div>
    )
  }
}

// Define the properties that this component requires
Cell.propTypes = {
  row: number.isRequired,
  col: number.isRequired,
  value: number
}

export default Cell
