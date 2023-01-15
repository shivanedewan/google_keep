import React from 'react'

export const Footer = () => {
    const date=new Date();
  return (
    <footer>
    <p>
        Copyright shivane @{date.getFullYear()}
    </p>
    </footer>
  )
}
