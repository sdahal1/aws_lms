import React, {useState} from 'react'

const BugAlert = ({answers=[]}) => {
  const [showAnswers, setShowAnswers] = useState(false)

  const revealAnswers = () => {
    console.log('answers revealed')
    setShowAnswers(!showAnswers)
  }

  return (
    <div className='bugalert'>
      <h3 className='text-center'>🐛 Found a bug?</h3>
      
      <button onClick={revealAnswers}>Click to see bug solution</button>
      {showAnswers &&
        <div className='answers'>
          <p>Solution:</p>
          {answers.map((answer, index) => <p key={index}>{answer}</p>)}
        </div>
      }
    </div>
  )
}

export default BugAlert