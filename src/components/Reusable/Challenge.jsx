import React, { useState } from 'react'

const Challenge = ({ prompt = "", hints = [], answers = [], images = [] }) => {
  const [showHints, setShowHints] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const revealHints = () => {
    console.log('hints revealed')
    setShowHints(!showHints)
  }

  const revealAnswers = () => {
    console.log('answers revealed')
    setShowAnswers(!showAnswers)
  }

  return (
    <div className='challenge'>
      <h3>Stretch Challenge time!</h3>
      <p>{prompt}</p>
      {
        hints.length && <button onClick={revealHints} className='btn btn-warning'>{showHints ? "HIDE HINTS" : "Click to see hints"}</button>
      }
      {showHints &&

        <div className='hints'>
          <p>Hints:</p>
          <ol>
            {hints.map((hint, index) => <li key={index}>{hint}</li>)}
          </ol>
        </div>
      }
      {
        answers.length > 0 &&
        <button onClick={revealAnswers} className='btn btn-danger'>{showAnswers ? "HIDE ANSWER" : "Click to see ANSWER"}</button>
      }
      {showAnswers &&
        <div className='answers'>
          <p>Answers:</p>
          <ol>
            {
              answers.map((answer, index) =>
                <li key={index}>
                  <p>{answer}</p>
                  {images.length > 0 && <img key={index} src={images[index]} width="800px" alt="" />}
                </li>)
            }
          </ol>
        </div>
      }
    </div>
  )
}

export default Challenge