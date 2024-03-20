import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div>
      <div className='container'>
        <h1>404</h1>
        <h2>Oh, Not found!</h2>
        <Link to='/'>Go to back home</Link>
      </div>
    </div>
  )
}

export default NotFound
