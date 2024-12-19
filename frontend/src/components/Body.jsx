import React from 'react'

function Body({children, className, ...props}) {
  return (
    <div className={`px-8 pt-16 pb-24 ${className}`} {...props}>
        {children}
    </div>
  )
}

export default Body