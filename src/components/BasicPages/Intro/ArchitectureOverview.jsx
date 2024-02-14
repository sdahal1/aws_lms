import React from 'react'
import { Link } from 'react-router-dom'

const ArchitectureOverview = () => {
  return (
    <div>
      <h2 className='text-center'>Architecture</h2>
      <hr />
      <div className="text-center">
        <img src="/assets/full_diagram.png" alt="" width={"800px"} className='architecture-diagram' />
      </div>
      <div className='p-3'>
        <h3>Architecture Overview</h3>
        <p className='mb-3'>
          The architecture of the serverless notification system is designed to send notifications to customers at scale. The architecture uses AWS services such as Lambda, API Gateway, Polly, and Translate. The system is designed to send notifications in multiple languages and can be easily scaled to handle a large number of requests.
        </p>
        <h4 className='mb-3'>
          First Workflow: Customer subscribes for notifications.
        </h4>
        <ol className='mb-3'>
          <li>Customer submits a form with their name, email, preferred language, and location.</li>
          <li>API Gateway receives the request and triggers a Lambda function to create subscriber.</li>
          <li>Lambda function creates a record in the DynamoDB table.</li>
          <li>Subscriber information is sent to the queue for further processing.</li>
          <li>Messages are generated, translated (AWS Translate), synthesized (Polly), and sent to the customer via email (SES).</li>
        </ol>
        <hr />
        <h4 className='mb-3'>
          Second Workflow: Mass alert sent to potentially millions of customers at once.
        </h4>
        <ol className='mb-3'>
          <li><b>Alert sent:</b>Alerting authority submits an alert to multiple users with their name, email, preferred language, and location.</li>
          <li><b>API Gateway:</b>API Gateway receives the request and triggers a Lambda function to process message to SQS queue.</li>
          <li><b>Batch Processing:</b>The Lambda function processes the array of users in batches. It sends each batch of users to an SQS (Simple Queue Service) queue. The batch size is configured to send data in batches of 10 users at a time.</li>
          <li><b>SQS Queue:</b> The SQS queue receives the batches of users from the Lambda function. It acts as a buffer between the Lambda function and the downstream processing systems.</li>
          <li><b>Lambda Consumer: </b>Subscribing lambda functions receive the emails and process them in order.</li>
          <li><b>Auto Scaling: </b>Another Lambda function, referred to as the Lambda consumer, is listening to the SQS queue. As messages (batches of users) are added to the queue, this Lambda function is triggered to process them. Dynamic Scaling: The Lambda consumer dynamically scales up based on the number of messages in the SQS queue. If the queue depth exceeds a certain threshold (e.g., a predefined number of messages), AWS Lambda automatically scales up the number of concurrent executions to handle the increased load.</li>
          <li>Messages are generated, translated (AWS Translate), synthesized (Polly), and sent to the customer via email (SES).</li>
        </ol>
      </div>
      <div className='d-flex m-2 justify-content-end align-items-center'>
        {/* next and previous buttons */}
        <div>
          <Link to="/basic/introduction-and-prerequisites/real-world-scenario" className="btn btn-primary">Previous</Link>
        </div>
        <div>
          <Link to="/basic/introduction-and-prerequisites/learning-objectives" className="btn btn-warning m-2">Next</Link>
        </div>
      </div>
    </div>
  )
}

export default ArchitectureOverview