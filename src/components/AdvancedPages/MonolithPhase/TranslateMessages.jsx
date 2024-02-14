import React from 'react'
import { CodeBlock } from 'react-code-blocks'
import LambdaCode2Translate from '../CodeSnippets/LambdaCode2Translate'
import CurlPostRequestSpanish from '../CodeSnippets/CurlPostRequestSpanish'
import Challenge from '../../Reusable/Challenge'
import NavigationButtons from '../../Reusable/NavigationButtons'

const TranslateMessages = () => {
  return (
    <div>
      <h2 className='text-center'>Translate using AWS Translate service</h2>
      <hr />
      <section>
        <h3>Overview</h3>
        {/* indent */}

        <p>In this section, we will translate messages using AWS Translate service. We will use AWS Lambda to call the AWS Translate service to translate the messages.</p>
        <p>We will generate the translated message in the request's "preferredLanguage" value.</p>
      </section>
      <section>
        <h4>Why AWS Translate?</h4>
        <p>AWS Translate is a neural machine translation service that delivers fast, high-quality, and affordable language translation. It is a fully managed service that scales to meet your needs.</p>
        <p>
          More information about AWS Translate can be found at:  
          <a href="https://aws.amazon.com/translate/" target="_blank" rel="noreferrer">AWS Translate</a>
        </p>
      </section>
      <section className='text-center'>
        <h3>Current Stage Architecture: </h3>
        <img src="/assets/diagrams/phase3Translate.png" alt="" className='mb-2' />
        <p>We will set up a basic serverless app that will take a post request, and will translate the message to the preferred language.</p>
      </section>
      <section>
        <h3>Update Lambda code to communicate with AWS Translate service</h3>
        <p>Update the enrollSubscriber.py file to look like this:</p>
        <LambdaCode2Translate></LambdaCode2Translate>
        <p>Summary: </p>
        <p>1. Added the translate_message function: This invokes the translate service with AWS</p>
        <p>2. Updated our handler to call translate with a message and handle if there is an error</p>
        <p>3. Used the translated response in our response from the API</p>
      </section>
      <section>
        <h3>Update and Provision Resources:</h3>
        <p>Update the SAM template to include the AWS Translate service and IAM role to communicate with the Translate service.</p>
      </section>
      <section>
        <h3>Deploy and Test</h3>
        <p>1. Deploy the updated SAM template and Lambda code</p>
        <p><code>{`sam build`}</code></p>
        <p><code>sam deploy</code></p>
        <p>2. Test using curl request. NOTE: make sure to test it with a preferred language that is not english, to see if it really works. Reference this for language codes that are accepted: <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html" target='_blank'>Translate supported Languages</a></p>
        <p>Here is an example using Spanish as the preferred language:</p>
        <CurlPostRequestSpanish/>
        <p>You should receive a response like this: </p>
        <img src="/assets/outputTranslate.png" alt="" width={'900px'}/>
      </section>
      <section>
        <h3>Improvements and Challenges</h3>
        <p>Improvements: </p>
        <p>1. We can add a feature to detect the language of the message and then translate it to the preferred language.</p>
        <p>2. We can add a feature to store the translated message in the database.</p>
        <p>Challenges: </p>
        <p>1. The AWS Translate service is not free, so we need to be mindful of the cost.</p>
        <p>2. The AWS Translate service has a limit on the number of characters that can be translated in a single request. We need to handle this in our application.</p>
      </section>
      <section>
        <Challenge prompt='What would you do if you wanted to translate a different language to the preferred language? Right now it is hardcoded to detect source language to US English.' hints={["Check the lambda function where you invoke the AWS Translate function"]} answers={["You will change the 'SourceLanguageCode' property to 'auto' to auto detect"]}/>
      </section>
      <section>
        <h3>Conclusion</h3>
        <p>In this section, we learned how to use the AWS Translate service to translate messages. We updated our serverless application to use the AWS Translate service to translate the message to the preferred language. We also learned about the improvements and challenges of using the AWS Translate service.</p>
      </section>
      <NavigationButtons previousPath="/advanced/phase1:-monolith/create-new-user" nextPath="/advanced/phase1:-monolith/text-to-speech" />
    </div>
  )
}

export default TranslateMessages