import React from 'react'
import { Link } from 'react-router-dom'
import { CodeBlock } from 'react-code-blocks'

const Cloud9 = () => {
  return (
    <div>
      <h2 className='text-center'>Set up Cloud9 IDE</h2>
      <hr />
      <section>
        <h3>What is it and why?</h3>
        <p>
          AWS Cloud9 is a cloud-based integrated development environment (IDE) that lets you write, run, and debug your code with just a browser. It includes a code editor, debugger, and terminal. Cloud9 comes pre-packaged with essential tools for popular programming languages, including JavaScript, Python, PHP, and more, so you don’t need to install files or configure your development machine to start new projects.
        </p>
        <p>Helps you stay on the same development environment as in this lab, so you won't have dependency issues.</p>
      </section>
      <section>
        <h2>Launch Cloud9</h2>
        <ol>
          <li>Navigate to the Cloud9 console</li>
          <li>Ensure you are using the appropriate region for the workshop, and switch the region if required.</li>
          <li>Select Create environment</li>
          <li>Name it serverless-workshop, and select Next Step</li>
          <li>
            <p>Ensure that you select t3.medium for Instance size.</p>
            <img src="https://static.us-east-1.prod.workshops.aws/public/209395cb-1bbe-42fa-b39e-7b9fd3ccf891/static/img/introduction/instance-size.png" alt="" height={"500px"} />
          </li>
          <li>Keep the rest of the default settings, and select Next Step</li>
          <li>Review the settings, and select Create environment</li>
          <li>
            <p>
              Close the tab for "Welcome" and you can click for a "new terminal"
            </p>
            <img src="https://static.us-east-1.prod.workshops.aws/public/209395cb-1bbe-42fa-b39e-7b9fd3ccf891/static/img/introduction/cloud9-0.png" alt="" height={"500px"} />
          </li>
        </ol>
      </section>
      <section>
        <h3>Ensure Node.js Version</h3>
        <p>
          In the terminal, run the following command to check the version of Node.js installed
        </p>
        <div className='width-100'>
          <CodeBlock
              text='node -v'
              language='bash'
              showLineNumbers={true}
              theme={'atom-one-light'}
            />
        </div>
        <p>You should see an output that looks like this: v20.10.0</p>
      </section>
      <section>
        <h2>VERY IMPORTANT! You will need some starter code for this lab. Please download from the following url using git clone. Clone this into your cloud9 environment.</h2>
        <p>Run the following in your ~/environment directory:</p>
        <p><code>git clone https://github.com/sdahal1/aws_lab_serverless_final.git</code></p>
      </section>
      <div className='d-flex m-2 justify-content-end align-items-center'>
        {/* next and previous buttons */}
        <div>
          <Link to="/advanced/setup/aws-account---iam-user" className="btn btn-primary">Previous</Link>
        </div>
        <div>
          <Link to="/advanced/setup/aws-sam" className="btn btn-warning m-2">Next</Link>
        </div>
      </div>
    </div>
  )
}

export default Cloud9