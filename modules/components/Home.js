import React from 'react'
import { Link } from 'react-router'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Play`}/>
        <ul>
          <li><Link to="/board?level=1">Easy</Link></li>
          <li><Link to="/board?level=2">Medium</Link></li>
          <li><Link to="/board?level=3">Hard</Link></li>
          <li><Link to="/board?level=4">Very hard</Link></li>
        </ul>
      </div>
    );
  }
});
