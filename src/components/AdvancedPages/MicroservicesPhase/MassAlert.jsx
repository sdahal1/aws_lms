import React from 'react'
import MicroFinalTemplate from '../CodeSnippets/MicroFinalTemplate'
import LambdaCodeMassAlert from '../CodeSnippets/LambdaCodeMassAlert'
import CurlPostRequestSendAlert from '../CodeSnippets/CurlPostRequestSendAlert'
import NavigationButtons from '../../Reusable/NavigationButtons'

const MassAlert = () => {
  return (
    <div>
      <h2 className='text-center'>Mass alert</h2>
      <hr />
      <section>
        <h3>Overview</h3>
        <p>We will now design our system so that we can send mass alert message to all users in a given state.</p>
      </section>
      <section>
        <h3>Steps:</h3>
        <p>1. Provision an API that will send mass alerts to our SQS for scalable processing of our lambda functions</p>
        <p>2. Create lambda code for mass alert</p>
        <p>3. Deploy and test</p>
      </section>
      <section>
        <h3>Provision an API that will send mass alerts to our SQS for scalable processing of our lambda functions</h3>
        <p>First, we will create a new API endpoint that will send mass alerts to our SQS queue. This will allow us to send mass alerts to all users in a given state.</p>
        <p>We can do this in the YAML file. All we have added so far is a new lambda function that will repond to a POST request at /sendAlert route. Here is the final file.</p>
        <MicroFinalTemplate/>
      </section>
      <section>
        <h3>Create the lambda function to send alert</h3>
        <p>This function will query all the subscribers from the DB who are from the given state from the alert request.</p>
        <p>Then it will send each user one by one into the SQS. This queue can scale and deliver to many lambda functions as needed, so we prevent a bottle neck in our function execution.</p>
        <p>Create a file called "mass_alert.py" and put it in the 'sam-app/handlers' folder. Use this code:</p>
        <LambdaCodeMassAlert/>
      </section>
      <section>
        <h3>Deploy and Test</h3>
        <p>Now we can deploy and test our new API endpoint. Run the following curl command in your terminal:</p>
        <CurlPostRequestSendAlert/>
        <p>NOTE: please make sure you have several users created in the DB with different email addresses that are verified in your AWS region and also that they are all in the same state. Then when making the curl request, request the state that those users all get emails in their preferred languages.</p>
      </section>
      <section>
        <h3>Add a frontend</h3>
        <p>Now that we have a scalable and asynchronous system, we can add a frontend to our application. This frontend will allow us to send mass alerts to all users in a given state.</p>
        <p>The app we need for the front end is in our starter code we downloaded in the beginning of the lab. The folder is called "alert_web_app"</p>
        <img src="/assets/WebappFolderStructure.png" alt="" />
        <ol>
          <li>First cd into the alert_web_app folder.</li>
          <li>Open up the /src/data/api_endpoint.js file</li>
          <li>Please update the variable to point to the api url you've been testing using curl</li>
          <li>Make sure you're in the alert_web_app folder and run: <code>npm install</code> to install the dependencies for the frontend app</li>
          <li>Now run <code>npm run build</code> to package this app for deployment</li>
          <li>Now install Amplify (This is an AWS service that lets you host and deploy frontend apps quickly.) You can run the following:
          <p><code>npm i -g @aws-amplify/cli</code></p>
          <p><code>sudo yum -y install xdg-utils</code></p></li>
          <li>Run <code>amplify configure</code> and follow the prompts to fill out your region, and username. You will also need to enter your access key and secret key to link your account.
          <p><img src="/assets/AmplifyConfigure.png" alt="" width={'600px'} /></p>
          </li>
          <li>Run <code>amplify init</code> while inside the alert_web_app directory</li>
          <li>Once it completes we are ready to add amplify hosting. Run <code>amplify add hosting</code></li>
          <li>You will be prompted to select a plugin to use for hosting. Select Hosting with Amplify Console:</li>
          <li>Next choose "manual deployment"</li>
          <li>Next run <code>amplify publish</code> to publish the webapp</li>
          <li>Congratulations! Your frontend is deployed. You can click on the deployment link to view the app and send alerts.</li>
        </ol>
      </section>
      <section>
        <h3>Use the web app</h3>
        <p>First in the home page we can test that the form creates a new subscriber and sends email.</p>
        <p>Second, you can click on "send alert" on the to left to go to a form to send a mass alert!</p>
      </section>
      <section>
        <h3>Conclusion</h3>
        <p>We have now created a scalable and asynchronous system that can send mass alerts to all users in a given state. This will allow us to send alerts to many users without worrying about the performance of our system.</p>
        <p>Congratulations! You have completed the lab!</p>
      </section>
      <NavigationButtons previousPath="/advanced/phase2:-scalable-and-asynchronous/improvements-and-challenges"/>
    </div>
  )
}

export default MassAlert