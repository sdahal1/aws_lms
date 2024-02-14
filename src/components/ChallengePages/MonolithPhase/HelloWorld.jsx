import React from 'react'
import { CodeBlock } from 'react-code-blocks'
import { Link } from 'react-router-dom'
import SamTemplateCode from '../CodeSnippets/templatecode'
import Challenge from '../../Reusable/Challenge'
import NavigationButtons from '../../Reusable/NavigationButtons'
import BugAlert from '../../Reusable/BugAlert'

const HelloWorld = () => {
  return (
    <div>
      <h2 className='text-center'>Create Hello World with SAM</h2>
      <hr />
      <section>
        <h3>Overview</h3>
        <p> In this section, we will create a simple Hello World application using AWS SAM. This will be the first step in building our serverless application. We will use AWS SAM to define our cloud architecture and write our backend python code.</p>
        <div className='note'>
          <p><strong>Note:</strong> This is a simple example to get you started with AWS SAM. We will build on this example in the next sections.</p>
          <br />
          <p>We are building this in small <strong>baby-steps</strong>, so that you can see each layer one by one.</p>
        </div>
      </section>

      <section>
        <h3>Current Stage Architecture: </h3>
        <img src="/assets/HelloWorld_diagram.png" alt="" />
        <p>We will set up a basic serverless app that will take a get request, and will return hello world as a response.</p>
      </section>
       <section>
        <h3>Initialize a SAM backend project</h3>
        <p>This project will be where we will define our cloud architecture step by step, and also where we will write our backend python code.</p>
        <ol>
          <li>
            Make sure you're in the ~/environment directory. Then run the following:
            <CodeBlock
              text='sam init'
              language='bash'
              showLineNumbers={true}
              theme={'atom-one-light'}
            />
          </li>
          <li>
            <p>Select choice 1 here: </p>
            <img src="/assets/Samtemplate.png" alt="" width="500px"/>
          </li>
          <li>
            <p>Select Hello World template and enter yes to the default options. It is setting up X-ray tracing and CloudWatch monitoring for your lambda functions so that we can debug any errors in a clearer way.</p>
            <img src="/assets/Sam_options.png" alt="" width="900px"/>
          </li>
          <li>
            <p>You should see a directory named: "sam-app" in your file explorer in cloud9</p>
          </li>
          {/* 1. open up the sam-app/template.yaml file. This file contains configurations for setting up your cloud infrastructure. Look at the file example below for line by line explanation of the code*/}
          <li>
            <p>Open up the sam-app/template.yaml file. This file contains configurations for setting up your cloud infrastructure. Look at the file example below for line by line explanation of the code</p>
            
            <SamTemplateCode/>
          </li>
        </ol>
        <p>Main things to note are that:</p>
        <ul>
          <li>We are creating a lambda function that will be triggered by an API Gateway API when the route "/hello" is requested with GET method. The lambda function will return a simple "Hello World" message.</li>
          <li>We are also setting up CloudWatch monitoring and X-ray tracing for the lambda function.</li>
        </ul>
      </section>
      <section>
        <h3>Deploy hello world app and test</h3>
        <ol>
          <li>
            <p>CD into sam-app, then once inside sam-app folder, run the following command to deploy the app:</p>
            <CodeBlock
              text={`sam build\nsam deploy --guided`}
              language='bash'
              showLineNumbers={true}
              theme={'atom-one-light'}
            />
          </li>
          <li>
            <p>Enter the default options when prompted.</p>
          </li>
          <li>
            <p>After the deployment is complete, you will see a message with the API endpoint URL. Copy this URL and open it in your browser.</p>
            <img src="/assets/deploy1Output.png" alt="" width="900px"/>
          </li>
          <li>
            <p>You should see a simple "Hello World" message in your browser.</p>
          </li>
        </ol>
      </section>
      <section>
        <h3>Summary</h3>
        <p>Congratulations! You have successfully created a simple Hello World application using AWS SAM. You have also learned how to deploy and test your serverless application.</p>
        {/* you can also use curl to make this request liek this: */}
        <p>Now go ahead and try this!</p>
        <CodeBlock
          text={`curl https://your-api-id.execute-api.us-west-2.amazonaws.com/Prod/`}
          language='bash'
          showLineNumbers={true}
          theme={'atom-one-light'}
        />
        <p><em>Note: Please replace above with YOUR api endpoint.</em></p>
        <BugAlert answers={["You have to check the curl URL. The endpoint we provided you is missing the /hello/ at the end"]}/>
      </section>
      <section>
        <h3>Now its time for a challenge to stretch your understanding of this section!</h3>
        <Challenge prompt="Now that have built /hello endpoint to return hello world to us, please update the code so that it returns 'Good morning serverless!' instead." hints={["Which file has the code about the response from the api?", "Will you have to deploy again?"]} answers={["Go to the sam-app/hello_world/app.py file. In this file you will see a function named lambda_handler, and you can adjust the return value as needed."]} images={["/assets/answers/answer1.png"]}></Challenge>
      </section>
      <NavigationButtons previousPath="/challenge/setup/email-verification-in-ses" nextPath="/challenge/phase1:-monolith/create-new-user" />
    </div>
  )
}

export default HelloWorld