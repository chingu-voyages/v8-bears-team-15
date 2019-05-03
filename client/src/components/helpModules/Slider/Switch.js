import React from 'react';

import './Switch.css';

function Switch() {
  return (
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
  )
}

export default Switch;