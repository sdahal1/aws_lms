import React from 'react';
import { Link } from 'react-router-dom';
import { CodeBlock } from 'react-code-blocks';

const AWSAccount = () => {
  return (
    <div>
      <h2>
        Create an IAM user

      </h2>
      <p>
        If you already have an AWS account or create an AWS account, create an IAM user that has access to AWS account. Log in to the AWS account, you can create a IAM user using IAM console. Create an IAM user with Administrator role as below the step. If you already have an IAM user with administrator role, skip the next task.

      </p>
      <ol>
        <li>
          From the Log in Page, log in with AWS root account email address and password then go to IAM Console

        </li>
        <li>
          From the left sidebar of the IAM Console, click Users and then click Add user
        </li>
        <li>
          Enter User name as Administrator.
        </li>
        <li>
          Tick AWS Management Console access check box from Access type and then choose Custom password and enter the password
        </li>
        <li>
          <p>
            Click Next: Permissions

          </p>
          <img src="https://static.us-east-1.prod.workshops.aws/public/209395cb-1bbe-42fa-b39e-7b9fd3ccf891/static/img/introduction/iam-user-01.png" alt="" />
        </li>
        <li>
          <p>
            Choose Attach existing policies directly, tick AdministratorAccess option and then click Next: Tags.
          </p>
          <img src="https://static.us-east-1.prod.workshops.aws/public/209395cb-1bbe-42fa-b39e-7b9fd3ccf891/static/img/introduction/iam-user-02.png" alt="" />
        </li>
        <li>
          Click Next: Review from Add tags(optional) section.
        </li>
        <li>
          Review AdministratorAccess, AWS managed policy, is added to Administrator user and then click Create user
        </li>
        <li>
          After creating the user, copy the access key and secret access key. Also copy the login URL. The format of the URL is as below.
          <CodeBlock
            text='https://<your_aws_account_id>.signin.aws.amazon.com/console'
            language='md'
            showLineNumbers={true}
            theme={'atom-one-light'}
          />
          <div className="important-alert">
            <p>
              <i class="fa-solid fa-triangle-exclamation"></i>
              <strong>Important: </strong> You must save the URL to log in to the Administrator user. You cannot access the Administrator user without this URL.
            </p>
          </div>
        </li>
        <li>
          Log out from the root user and then log in to the Administrator user you just created using the URL you copied above.
        </li>
      </ol>
       <div className='d-flex m-2 justify-content-end align-items-center'>
        {/* next and previous buttons */}
        <div>
          <Link to="/basic/introduction-and-prerequisites/prerequisites" className="btn btn-primary">Previous</Link>
        </div>
        <div>
          <Link to="/basic/setup/cloud9-ide-setup" className="btn btn-warning m-2">Next</Link>
        </div>
      </div>

    </div>

  )
}

export default AWSAccount