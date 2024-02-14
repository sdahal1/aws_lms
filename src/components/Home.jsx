import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
      <div className="">
        <h2>Hands on lab: Build a Serverless Notification System</h2>
        <p> In this hands-on lab, you will learn how to build a serverless notification system using the following technologies.</p>
        <ul>
          {/* lambda, api gateway, AWS SAM, Polly, Translate, SES, SQS */}
          <li>AWS Lambda</li>
          <li>Amazon API Gateway</li>
          <li>AWS SAM</li>
          <li>Amazon Polly</li>
          <li>Amazon Translate</li>
          <li>Amazon Simple Email Service (SES)</li>
          <li>Amazon Simple Queue Service (SQS)</li>
        </ul>
        <h3 className='text-center'>Please choose your lab mode</h3>
        {/* 3 modes: Basic, Challenge, Self-Sufficient */}
        <div className="lab-modes d-flex justify-content-center">
          {/* put them in cards with slightly lighter color than background color */}
          <div className="card nav-bg text-light">
            <img className="card-img-top" src="" alt="" />
            <div className="card-body text-center">
              <h3 className="card-title">Basic</h3>
              <h6 className='card-subtitle mb-2'>Est: 1 hour</h6>
              <Link to="/basic/introduction-and-prerequisites/real-world-scenario" className="btn btn-primary m-2 text-light">Start</Link>
              <p className="card-text text-center m-3">Follow the step-by-step instructions with full code and explanations provided.</p>
            </div>
          </div>
          <div className="card nav-bg text-light">
            <img className="card-img-top" src="" alt="" />
            <div className="card-body text-center">
              <h3 className="card-title">Challenge</h3>
              <h6 className='card-subtitle mb-2'>Est: 2 hours</h6>
              <Link to="/challenge/introduction-and-prerequisites/real-world-scenario" className="btn btn-primary m-2 text-light">Start</Link>
              <p className="card-text text-center m-3">Contains everything basic has but with intentionally placed bugs</p>
              <p className="card-text text-center m-3">Build deeper knowledge by solving some common bugs as you complete the lab.</p>
              <p className="card-text text-center m-3">You will master your troubleshooting skills.</p>
            </div>
          </div>
          {/* <div className="card nav-bg text-light">
            <img className="card-img-top" src="" alt="" />
            <div className="card-body text-center">
              <h5 className="card-title">Self Sufficient</h5>
              <h6 className='card-subtitle mb-2'>Est: 2 hours</h6>
              <Link to="/advanced/introduction-and-prerequisites/real-world-scenario" className="btn btn-primary m-2 text-light">Start</Link>
              <p className="card-text text-start">You will be challenged to complete lab with guiding questions and hints. Minimal hand-holding.</p>
            </div>
          </div> */}
        </div>
      </div>
  )
}

export default Home