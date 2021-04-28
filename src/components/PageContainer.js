import React from 'react'

export const PageContainer = (props) => {
  return (
    <div {...props}>
      {props.children}
    </div>
  )
}
