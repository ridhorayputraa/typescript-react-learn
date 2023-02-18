import React from 'react'

// definisikan types
type ChildrenProps = {
    children: React.ReactNode
}

export default function Layout({children}:ChildrenProps  ) {
  return (
    <div>{children}</div>
  )
}
