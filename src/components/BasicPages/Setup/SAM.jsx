import React from 'react'
import { CodeBlock } from 'react-code-blocks'
import { Link } from 'react-router-dom'

const SAM = () => {
  const cliText = 
  `sudo yum update -y
wget https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.zip
unzip aws-sam-cli-linux-x86_64.zip -d sam-installation
sudo ./sam-installation/install --update
sam --version
  `
  return (
    <div>
      <h2 className='text-center'>Serverless Appplication Model (SAM)</h2>
      <section>
        <h3>Overview</h3>
        <p>
          AWS Serverless Application Model (SAM) is an open-source framework for building serverless applications. It provides shorthand syntax to express functions, APIs, databases, and event source mappings. With just a few lines per resource, you can define the application you want and model it using YAML. During deployment, SAM transforms and expands the SAM syntax into AWS CloudFormation syntax, enabling you to build serverless applications faster.
        </p>
        <h4>WHY?:</h4>
        <ul>
          <li>Save time from clicking through console</li>
          <li>Consistent and repeatable</li>
          <li>Version control</li>
          <li>Collaboration</li>
          <li>Update architecture in seconds</li>
          <li>More...</li>
        </ul>
      </section>
      <section>
        <h3>Install SAM</h3>
        <p>
          You can use SAM with AWS Cloud9, Visual Studio Code, or any other IDE. In this workshop, we will use AWS Cloud9.
        </p>
        <p>You will need to make sure you have the AWS SAM (Command Line Interface) CLI set up</p>
        <p>Install SAM CLI using the following command</p>
        <CodeBlock
            text={cliText}
            language='bash'
            showLineNumbers={true}
            theme={'atom-one-light'}
          />
        <p>Output will look like: SAM CLI, version 1.105.0</p>
      </section>
      <div className='d-flex m-2 justify-content-end align-items-center'>
        {/* next and previous buttons */}
        <div>
          <Link to="/basic/setup/cloud9-ide-setup" className="btn btn-primary">Previous</Link>
        </div>
        <div>
          <Link to="/basic/setup/email-verification-in-ses" className="btn btn-warning m-2">Next</Link>
        </div>
      </div>
    </div>
  )
}

export default SAM