import React from 'react'
import LambdaCode1 from '../CodeSnippets/LambdaCode1'
import Template1Code from '../CodeSnippets/Template1Code'
import CurlPostRequest from '../CodeSnippets/CurlPostRequest'
import Challenge from '../../Reusable/Challenge'
import NavigationButtons from '../../Reusable/NavigationButtons'
import BugAlert from '../../Reusable/BugAlert'

const NewUser = () => {
  return (
    <div>
      <h2 className='text-center'>Create Subscribers - Set up Database and Lambda</h2>
      <hr />
      <section>
        <h3>Overview</h3>
        <p> In this section, we will create a new user in our serverless application. We will use AWS DynamoDB to create a new database and use AWS Lambda to create a new user in the database.</p>
        <p>We will be coding, you can find all the code for this project at this github repo: INSERT GITHUB REPO HERE!!!!!</p>
      </section>
      <section>
        <h4>Why DynamoDB?</h4>
        <p>DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. It is a serverless database, which means you don't have to worry about the infrastructure. It is a great choice for serverless applications.</p>
      </section>
      <section className='text-center'>
        <h3>Current Stage Architecture: </h3>
        <img src="/assets/diagrams/phase2CreateUser.png" alt="" className='mb-2' />
        <p>We will set up a basic serverless app that will take a post request, and will create a new user in the database.</p>
      </section>
      <section>
        <h3>Create Lambda Function that will interact with DB</h3>
        <ol>
          <li>Go to sam-app directory and create a folder called handlers</li>
          <li>Create a folder inside handlers named "enrollSubscriber"</li>
          <li>Create a file called enrollSubscriber.py in the enrollSubscriber folder</li>
          <li>Should look like this <br /> <img src="/assets/folder-structure.png" alt="" /></li>
          <li>Write the following code in the enrollSubscriber.py file</li>
          <LambdaCode1 />
        </ol>
      </section>
      <section>
        <h3>Update and Provision Resources:</h3>
        <p><strong>Summary:</strong></p>
        <p>This SAM (Serverless Application Model) template defines resources for an AWS serverless application. It includes an IAM role for a Lambda function, the Lambda function itself, a DynamoDB table, an API Gateway, and resource group and application insights monitoring resources.</p>

        <p><strong>Resources:</strong></p>
        <ol>
          <li><strong>MyLambdaRole:</strong> IAM role for the Lambda function with policies for CloudWatch Logs and DynamoDB permissions.</li>
          <li><strong>EnrollSubscriberFunction:</strong> Lambda function to enroll subscribers, triggered by an API Gateway event.</li>
          <li><strong>SubscribersTable:</strong> DynamoDB table to store subscriber information.</li>
          <li><strong>SubscribeApi:</strong> API Gateway to handle application requests.</li>
          <li><strong>ApplicationResourceGroup:</strong> Resource group for application insights monitoring.</li>
          <li><strong>ApplicationInsightsMonitoring:</strong> Application insights monitoring for the application.</li>
        </ol>

        <p><strong>Outputs:</strong></p>
        <ul>
          <li><strong>SubscribeApi:</strong> API Gateway endpoint URL for the application.</li>
          <li><strong>SubscribersTableArn:</strong> ARN of the DynamoDB table.</li>
        </ul>

        <Template1Code />

      </section>
      <section>
        <h3>Deploy changes</h3>
        <p>Run the following command in your terminal to deploy the changes to AWS:</p>
        <p><code>cd sam-app</code></p>
        <p><code>sam build</code></p>
        <p><code>sam deploy --guided</code></p>
        <p>If done correctly you should see green output like this:</p>
        <img src="/assets/output.png" alt="" width={'600px'}/>
      </section>
      <section>
        <h3>Test the new user creation</h3>
        <p>Now that we have deployed the changes to AWS, we can test the new user creation. Run the following command in your terminal:</p>
        <div style= {{width: '800px'}}>
          <CurlPostRequest style={{width: '100px'}}/>
        </div>
        <p>If done correctly you should see a success message on the terminal.</p>
        <BugAlert answers={["Please check cloudwatch. You will see an error saying that there is a key error for 'TABLE_NOMBRE'. That is because we gave the wrong environment variable name. Please change it in YAML file to be 'TABLE_NAME"]}/>
      </section>
      <section>
        <h3>Check the DynamoDB table</h3>
        <p>Go to the AWS console and check the DynamoDB table to see if the new user was created.</p>
      </section>
      <section>
        <h3>Challenge time!</h3>
        <Challenge prompt="What would you do to change the path of this from /subscribe to /createUser. Where would you go to update this?" hints={["Which type of resource is related with paths?", "Which file will have these resources?"]} answers={["You can go to the yaml file and update the path to '/createUser'"]} images={["/assets/answers/answer2.png"]} ></Challenge>
      </section>
      <section>
        <h3>Challenge #2:</h3>
        <Challenge prompt="What would you do to add a new field for users called 'age'?" hints={["What will we need to adjust to our curl request?", "Which file will we have to modify to take the new input and speak with the DB?"]} answers={["You can add a new key value pair in your curl request object", "You will have to add new fields in the lambda function enrollSubscriber.py"]} images={['',"/assets/answers/answer3.png"]} ></Challenge>
        <strong>IMPORTANT: Please delete the modified code from the challenge. We will not be using "age" input and "/createUser" path. Our path will remain "/subscribe"</strong>
      </section>
      <section>
        <h3>Conclusion</h3>
        <p>Congratulations! You have successfully created a new user in the database using AWS DynamoDB and AWS Lambda. In the next section, we will learn how to translate messages in our serverless application.</p>
      </section>
      <NavigationButtons previousPath="/challenge/phase1:-monolith/create-hello-world-with-sam" nextPath="/challenge/phase1:-monolith/translation-of-messages" />
    </div>
  )
}

export default NewUser