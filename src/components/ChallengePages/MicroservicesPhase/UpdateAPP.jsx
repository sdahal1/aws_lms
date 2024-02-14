import React from 'react'
import SQSTemplate1 from '../CodeSnippets/SQSTemplate1'
import MicroCreateUser from '../CodeSnippets/MicroCreateUser'
import MicroTranslate from '../CodeSnippets/MicroTranslate'
import MicroSynthesize from '../CodeSnippets/MicroSynthesize'
import MicroSendEmail from '../CodeSnippets/MicroSendEmail'
import NavigationButtons from '../../Reusable/NavigationButtons'

const UpdateAPP = () => {
  return (
    <div>
      <h2 className='text-center'>Updating our Application to use SQS</h2>
      <section>
        <h3>Recap so far:</h3>
        <p>
          So far we have built a monolithic application that has one lambda function that handles all the services.
        </p>
        <p>We will break that function down to multiple functions. We will then use SQS to send the data between the functions asynchronously.</p>
        <p>What does this mean?</p>
        <p>
          It means that when a user makes a request to the API Gateway, the API Gateway will invoke a lambda function. This function will push a message to the queue and stop running. Another lambda function on the receiving end (subscriber) will dequeue the queue and process the queued message in a scalable manner. The rest of the flow will result in translation, speech synthesis, and email send.
        </p>
      </section>
      <section>
        <h3>Update our architecture in YAML file</h3>
        <p>
          We will update our architecture in the YAML file to include the queues and multiple functions that can use those queues.
        </p>
        <p>Here is the updated yaml file. The code will be explained below</p>
        <SQSTemplate1 />
        <p>This AWS SAM (Serverless Application Model) template defines a serverless application consisting of several AWS resources:</p>
        <ul>
          <li>IAM role (`MyLambdaRole`) for Lambda functions with permissions to create items in DynamoDB, write logs to CloudWatch Logs, and perform other necessary actions.</li>
          <li>Lambda functions (`CreateUserFunction`, `TranslateMessageFunction`, `SynthesizeSpeechFunction`, `SendEmailFunction`) for various tasks such as saving subscribers to a database, translating messages, synthesizing speech, and sending emails. These functions are triggered by API Gateway and SQS events.</li>
          <li>SQS queues (`TranslationQueue`, `SynthesisQueue`, `SendEmailQueue`) to handle translation requests, synthesis requests, and email sending requests.</li>
          <li>DynamoDB table (`SubscribersTable`) to store users who subscribe for notifications.</li>
          <li>API Gateway (`SubscribeApi`) to handle requests to the application.</li>
          <li>S3 bucket (`VoiceAudioBucket`) for storing voice audio files.</li>
          <li>Application Insights monitoring setup for the application.</li>
        </ul>
        <p>The template also defines global settings for all Lambda functions, such as timeout, memory size, and X-Ray tracing. Environment variables are configured for each Lambda function to specify necessary parameters.</p>
        <p>CORS (Cross-Origin Resource Sharing) settings are defined for the API Gateway to allow specified HTTP methods, headers, and origins.</p>
        <p>Finally, the template includes outputs for the API Gateway endpoint URL and the ARN (Amazon Resource Name) of the DynamoDB table.</p>
      </section>
      <section>
        <h3>Create Microservice Lambda functions</h3>
        <p>
          We will create multiple lambda functions for each of the services. We will then use SQS to send the data between the functions asynchronously.
        </p>
        <p>What does this mean?</p>
        <p>
          It means that when a user makes a request to the API Gateway, the API Gateway will invoke a lambda function. This function will push a message to the queue and stop running. Another lambda function on the receiving end (subscriber) will dequeue the queue and process the queued message in a scalable manner. The rest of the flow will result in translation, speech synthesis, and email send.
        </p>
        <p>Steps:</p>
        <ol>
          <li>Create 4 new files in your sam-app/handlers folder: create_user.py, translate_message.py, speech_synthesis.py, and send_email.py</li>
          <li>
            <p>Insert this code into create_user.py</p>
            <MicroCreateUser />
          </li>
          <li>
            <p>Insert this code into translate_message.py</p>
            <MicroTranslate />
          </li>
          <li>
            <p>Insert this code into speech_synthesis.py</p>
            <MicroSynthesize />
          </li>
          <li>
            <p>Insert this code into send_email.py</p>
            <MicroSendEmail />
          </li>
        </ol>
      </section>
      <section>
        <h3>Code Flow Summary</h3>
        <ol>
          <li>
            <h4>CreateUser.py</h4>
            <p>Receives subscriber information, generates a unique ID, sends a message to SQS queue (TRANSLATE_QUEUE_URL), and inserts subscriber information into DynamoDB table.</p>
          </li>
          <li>
            <h4>TranslateMessage.py</h4>
            <p>Retrieves a message from SQS queue (TRANSLATE_QUEUE_URL), translates the message using Amazon Translate, and sends the translated message to another SQS queue (SYNTHESIS_QUEUE_URL).</p>
          </li>
          <li>
            <h4>SpeechSynthesis.py</h4>
            <p>Retrieves a message from SQS queue (SYNTHESIS_QUEUE_URL), synthesizes the message into speech using Amazon Polly, stores the synthesized speech in an S3 bucket, generates a pre-signed URL, and sends the URL to another SQS queue (EMAIL_QUEUE_URL).</p>
          </li>
          <li>
            <h4>SendEmail.py</h4>
            <p>Retrieves a message from SQS queue (EMAIL_QUEUE_URL) and sends an email containing the message and the pre-signed URL to the subscriber using Amazon SES.</p>
          </li>
        </ol>
      </section>
      <section>
        <h3>Deploy and test!</h3>
        <p>Now we can run the build and deploy commands</p>
        <p><code>sam build</code></p>
        <p><code>sam deploy</code></p>
        <p>Send the same curl request as usual and see that it works!</p>
      </section>
      <section>
        <h3>So what is improved?</h3>
        <p>
          We have improved the application by breaking down the monolithic function into multiple functions. This will help us to scale each function independently and also to maintain the codebase easily.
        </p>
        <p>Also, we have used SQS to send the data between the functions asynchronously. This will help us to handle the load and also to handle the failure scenarios.</p>
        <p>Let's take a look at the speed comparison in the next lesson.</p>
      </section>
      <NavigationButtons previousPath='/challenge/phase2:-scalable-and-asynchronous/simple-queue-service-(sqs)' nextPath='/challenge/phase2:-scalable-and-asynchronous/improvements-and-challenges' />
    </div>
  )
}

export default UpdateAPP