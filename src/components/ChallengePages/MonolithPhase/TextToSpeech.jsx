import React from 'react'
import NavigationButtons from '../../Reusable/NavigationButtons'
import S3Bucket from '../CodeSnippets/S3Bucket'
import TemplateCodePollyS3 from '../CodeSnippets/TemplateCodePollyS3'
import LambdaCode3PollyS3 from '../CodeSnippets/LambdaCode3PollyS3'
import CurlPostRequestSpanish from '../CodeSnippets/CurlPostRequestSpanish'
import Challenge from '../../Reusable/Challenge'
import BugAlert from '../../Reusable/BugAlert'

const TextToSpeech = () => {
  return (
    <div>
      <h2 className='text-center'>Text to Speech</h2>
      <hr />
      <section>
        <h3>Objectives:</h3>
        <ul>
          <li><strong>AWS Polly: </strong>Use AWS Polly to convert text to speech</li>
          <li><strong>S3 bucket: </strong>Use AWS S3 to store the audio file</li>
          <li>Store the mp3 audio in s3 bucket</li>
          <li>Generate a presigned URL from s3 audio object</li>
          <li>Respond to curl request with everything from before plus the url to the audio</li>
        </ul>
      </section>
      <section>
        <h3>What is Amazon Polly?</h3>
        <p>Amazon Polly is an AWS service that allows you to convert text into lifelike speech using deep learning technologies. It offers a wide range of natural-sounding voices in multiple languages and accents, enabling you to create more engaging and personalized experiences for your users.</p>
        <h2>Key Features</h2>
        <ul>
          <li><strong>Text-to-Speech Conversion:</strong> Amazon Polly can convert text into speech in real-time, allowing you to synthesize speech from plain text or SSML.</li>
          <li><strong>Multiple Voices:</strong> It offers a variety of voices, including male and female voices with different accents and languages. We will have to map the correct preferred language of the user to the correct voice in our Lambda function.</li>
          <li><strong>Custom Lexicons:</strong> You can create custom lexicons to improve the pronunciation of specific words or phrases.</li>
        </ul>
        <div className="text-center">

          <img src="https://www.cxtoday.com/wp-content/uploads/2018/10/AWSAmazonPolly.jpg" alt="" width={"600px"} />
        </div>
      </section>
      {/* 1. Provision s3 bucket . 2. Update policy for lambda resource to allow access to invoke polly. 3. update teh lambda function to integrate with AWS Polly service */}
      {/* architecture */}
      <section>
        <h3>Architecture</h3>
        <p>When a user sends a request to the API Gateway, the Lambda function will convert the text to speech using the AWS Polly service. The audio file will be stored in an S3 bucket. The Lambda function will then generate a presigned URL for the audio file and respond to the user's request with the URL.</p>
        <div className="text-center">
          <img src="/assets/diagrams/phase3PollyS3.png" alt="" />
        </div>
      </section>
      <section>
        <h3>1. Provision s3 bucket, and update LambdaRole Policies for Polly and S3</h3>
        <p>Provision a new s3 bucket to store the mp3 audio file</p>
        <p>Add the following into your template.yaml file as a new resource underneath the SubscribeApi:</p>
        <S3Bucket></S3Bucket>
        <p>Also update the Policies for Lambda Role so it can interact with s3 and Polly</p>
        <p>Your final yaml file should look like this:</p>
        <TemplateCodePollyS3 />
      </section>

      <section>
        <h3>2. Update the lambda function to integrate with AWS Polly service</h3>
        <p>
          Update the lambda function to convert text to speech using AWS Polly service.
          You can use the following code snippet to integrate with Polly service:
        </p>
        <p>You can update your lambda function 'enrollSubscriber' to have this code. Please take a moment to understand what the code is doing using the comments on new lines of code.</p>
        <LambdaCode3PollyS3/>
      </section>
      <section>
        <h3>3. Deploy and test</h3>
        <p>Deploy the changes to your stack using:</p>
        <p><code>sam build</code></p>
        <p><code>sam deploy</code></p>
        <p>and test the functionality using the same curl command:</p>
        <CurlPostRequestSpanish/>
        <p>When you get back a response, it should also have a presigned url you can click on to hear the audio!</p>
        <h3>...wait, you didn't get back a success response?</h3>
        <p>Please check cloud logs before looking to find the answer to this bug.</p>
        <BugAlert answers={["Check the YAML file, for lambda role permissions. You need to give it permissions to interact with polly and s3."]}/>
      </section>
      <section>
        <h3>Stretch Challenge</h3>
        <Challenge prompt="Get it to send you audio back in German. What is determining the language it is returning to you in teh audio file? What needs to change to influence that?" hints={["You can check the AWS Polly documentation to find which languages are supported", "You can look at AWS translate codes to find which languages are supported that Polly also supports", "Where do you have to input the language you want to hear back from?"]} answers={["Send a supported language in through the curl request for the 'preferredLanguage' key value pair"]}/>
        <p></p>
        <Challenge prompt="How many characters per month can Polly process at no charge?" hints={["Check documentation!"]} answers={["You can use Polly to process 5 million characters per month at no charge. After that, you pay $0.000004 per character, or about $0.004 per minute of generated audio. That works out to around $2.00 for the full text of Think and Grow Rich"]} />

        <Challenge prompt="How would you implement logging for Polly to see data related to Polly's processes on your app?" hints={["Think of actions as events in CloudTrail, where would we indicate these logs?"]} answers={["You can update the Yaml file with a new Role and policy"]} />
      </section>
      {/* conclusion */}
      <section>
        <h3>Conclusion</h3>
        <p>Congratulations! You have successfully integrated AWS Polly into your serverless application. You can now convert text to speech and store the audio file in an S3 bucket. You have also learned how to generate a presigned URL for the audio file and respond to a user's request with the URL. You can now move on to the next phase of the workshop.</p>
      </section>

      <NavigationButtons previousPath="/challenge/phase1:-monolith/translation-of-messages" nextPath="/challenge/phase1:-monolith/send-email" />
    </div>
  )
}

export default TextToSpeech