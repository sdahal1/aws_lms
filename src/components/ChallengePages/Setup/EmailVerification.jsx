import React from 'react'
import { Link } from 'react-router-dom'

const EmailVerification = () => {
  return (
    <div>
      <h2 className='text-center'>Email Verification in SES</h2>
      <hr />
      <section>
        <h3>Overview</h3>
        <p>
          Amazon Simple Email Service (Amazon SES) is a cloud-based email sending service designed to help digital marketers and application developers send marketing, notification, and transactional emails. It is a reliable, cost-effective service for businesses of all sizes that use email to keep in contact with their customers.
        </p>
        <p>
          In this section, we will verify the email address that we will use to send emails from our application. This is a necessary step to avoid spam and to ensure that the email address is not being used for malicious purposes.
        </p>
        <p><em>Note: This is only required in sandbox mode. If you need to actually use this for real situation, you should request to be in production mode so you can send emails to non-verified emails.</em></p>
      </section>
      <section>
        <h3>Steps</h3>
        <ol>
          <li>Go to the SES console and select the region. <em>Note: PLEASE REMEMBER THIS REGION, you will use this for rest of the lab.</em></li>
          <li>Click on Email Addresses in the left navigation pane.</li>
          <li>
            <p>
              Click on the "Verify a New Email Address" button.

            </p>

            <img src="/assets/email-verification.png" alt="" width={"500px"} />


          </li>
          <li>Enter the email address you want to verify and click "Verify This Email Address".</li>
          <li>Open the email from AWS and click on the link to verify the email address.</li>
          <li>IMPORTANT: Please do this with 2 emails. One email will be used as the sender and the 2nd email will be as recipient</li>
        </ol>
      </section>
      <div className='d-flex m-2 justify-content-end align-items-center'>
        {/* next and previous buttons */}
        <div>
          <Link to="/basic/setup/aws-sam" className="btn btn-primary">Previous</Link>
        </div>
        <div>
          <Link to="/basic/phase1:-monolith/create-hello-world-with-sam" className="btn btn-warning m-2">Next</Link>
        </div>
      </div>
    </div>
  )
}

export default EmailVerification