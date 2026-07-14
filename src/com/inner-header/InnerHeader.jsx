import React from 'react'

function InnerHeader({title,icon}) {
  const ico = icon 
  return (
            <h2 className="inner-title">
              <i className={`fa-regular fa-${icon}`}></i> {title}
            </h2>  
          )
}

export default InnerHeader