import React from 'react'
import { Link } from 'react-router-dom'

const LearningObjectives = () => {
  return (
    <div>
      <h2 className='text-center'>Learning Objectives</h2>
      <hr />
      <p>Your will develop a full stack serverless application that can send notifications to customers at scale!</p>
      <p>You will be able to see the benefits of using Lambda functions as Microservices and learn to integrate them with various AWS services.</p>
      <ul>
        {/* Make lists for the following: Understand the architecture of a serverless application using AWS services such as Lambda, API Gateway, Polly, and Translate.
Learn how to create and configure an API Gateway in AWS to handle HTTP requests from a client application.
Gain proficiency in writing Lambda functions in Python or Node.js to process incoming requests and interact with other AWS services.
Learn how to integrate AWS Translate service to translate text messages into different languages dynamically.
Understand the usage of AWS Polly service to synthesize text into lifelike speech in various languages.
Learn how to trigger Lambda functions asynchronously to perform tasks such as sending emails or generating audio files.
Gain practical experience in setting up IAM roles and policies to grant necessary permissions to Lambda functions.
Understand best practices for error handling and logging in serverless applications deployed on AWS.
Learn how to deploy and test serverless applications using AWS Management Console or AWS CLI. */}
        <li>Understand the architecture of a serverless application using AWS services such as Lambda, API Gateway, Polly, and Translate</li>
        <li>Learn to Deploy serverless with AWS SAM</li>
        <li>Use IAM roles and policies to grant necessary permissions to Lambda functions</li>
        <li>Gain proficiency in writing Lambda functions in Python</li>
        <li>Understand best practices for error handling and logging in serverless applications</li>
        <li>Integrate AWS Translate service to translate text messages into different languages</li>
        <li>Understand the usage of AWS Polly service to synthesize text into lifelike speech in various languages</li>
        <li>Learn how to use Amazon Simple Email Service (SES) to send emails</li>
        <li>Understand how to use Amazon Simple Queue Service (SQS) to create a scalable and asynchronous architecture</li>
        <li>Learn from bad practices to understand best practices</li>
      </ul>
      <img src="/assets/cloud.png" alt="" />
      <div className='d-flex m-2 justify-content-end align-items-center'>
        {/* next and previous buttons */}
        <div>
          <Link to="/basic/introduction-and-prerequisites/architecture-overview" className="btn btn-primary">Previous</Link>
        </div>
        <div>
          <Link to="/basic/introduction-and-prerequisites/prerequisites" className="btn btn-warning m-2">Next</Link>
        </div>
      </div>
    </div>
  )
}

export default LearningObjectives