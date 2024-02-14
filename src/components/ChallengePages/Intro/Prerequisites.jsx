import React from 'react'
import { Link } from 'react-router-dom'

const Prerequisites = () => {
  return (
    <div>
      <h2 className='text-center'>Prerequisites</h2>
      <hr />
      <p>Before you begin, you will need the following:</p>
      <ul>
        <li>AWS Account with Root Access</li>
        <li>Basic Python Skills</li>
        <li>Basic SAM skills</li>
      </ul>
      <div className='d-flex m-2 justify-content-end align-items-center'>
        {/* next and previous buttons */}
        <div>
          <Link to="/challenge/introduction-and-prerequisites/learning-objectives" className="btn btn-primary">Previous</Link>
        </div>
        <div>
          <Link to="/challenge/setup/aws-account---iam-user" className="btn btn-warning m-2">Next</Link>
        </div>
      </div>
    </div>
  )
}

export default Prerequisites