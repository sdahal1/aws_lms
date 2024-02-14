import React from 'react'
import { Link } from 'react-router-dom'

const NavigationButtons = ({previousPath="", nextPath=""}) => {
  return (
    
      <div className='d-flex m-2 justify-content-end align-items-center'>
        {/* next and previous buttons */}
        <div>
          {/* if previousPath is empty, don't show the previous button */}
          {previousPath && 
            <Link to={previousPath} className="btn btn-primary">Previous</Link>
          }
        </div>
        <div>
          {/* if nextPath is empty, don't show the next button */}
          {nextPath && 
            <Link to={nextPath} className="btn btn-warning m-2">Next</Link>
          }
          
        </div>
      </div>
   
  )
}

export default NavigationButtons