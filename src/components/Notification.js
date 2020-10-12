import React from 'react'
import ReactDom from 'react-dom'

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }  
    return (
      <div className="error">
        {message}
      </div>
    )
  }
  export default Notification