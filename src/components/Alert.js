import React from 'react'

export default function Alert(props) {
  return (
    <div className='container'>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {props.Alert.msg}
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}
