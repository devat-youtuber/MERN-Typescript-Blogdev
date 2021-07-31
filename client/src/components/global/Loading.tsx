import React from 'react'

const Loading = () => {
  return (
    <div className="d-flex justify-content-center my-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
