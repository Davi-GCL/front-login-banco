import React from 'react'

function Alert({variant, children}) {
  return (
    <div className={`d-flex justify-content-between alert alert-${variant}`}> {children} <i class="bi bi-x-lg" onClick={({currentTarget})=>{currentTarget.parentElement.remove()}}></i></div>
  )
}

export default Alert