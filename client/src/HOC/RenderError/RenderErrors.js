import React from 'react'

const RenderErrors = (props) => {
  return (
    <div style={{ textAlign: 'center', color: 'red' }}>
      {props.error}
    </div>
  )
}

export default RenderErrors