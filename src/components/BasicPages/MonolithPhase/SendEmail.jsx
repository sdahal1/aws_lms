import React from 'react'
import NavigationButtons from '../../Reusable/NavigationButtons'
import LambdaCode4Ses from '../CodeSnippets/LambdaCode3Ses'
import TemplaceCodeSES from '../CodeSnippets/TemplateCodeSES'

const SendEmail = () => {
  return (
    <div>
      <h2 className='text-center'>Send Email</h2>
      <hr />
      <section>
        <h3>Objectives:</h3>
        <ul>
          <li><strong>Amazon SES: </strong>Use Lambda to call Amazon SES to send an email to the subscribed user.</li>
        </ul>
      </section>
      <section>
        <h3>What is Amazon SES?</h3>
        <p>Amazon Simple Email Service (Amazon SES) is a cloud-based email sending service designed to help digital marketers and application developers send marketing, notification, and transactional emails. It is a reliable, cost-effective service for businesses of all sizes that use email to keep in contact with their customers.</p>
        <h2>Key Features</h2>
        <ul>
          <li><strong>High Deliverability:</strong> Amazon SES uses content filtering technologies to scan outgoing email and prevent spam and phishing attempts.</li>
          <li><strong>Customization
            :</strong> You can customize your email messages using HTML, and you can also use attachments.</li>
          <li><strong>Real-time Analytics:</strong> Amazon SES provides real-time analytics to help you track the delivery, open, click, and bounce rates of the emails you send.</li>
        </ul>
        <div className="text-center">

          <img src="https://aws.taf-jp.com/cms/wp-content/uploads/2022/08/blog_featured-img_w580px_Amazon-SES.png" alt="" width={"600px"} />
        </div>
      </section>
      {/* 1. Provision s3 bucket . 2. Update policy for lambda resource to allow access to invoke polly. 3. update teh lambda function to integrate with AWS Polly service */}
      {/* architecture */}
      <section>
        <h3>Architecture</h3>
        <p>
          When a user sends a request to the API Gateway, the Lambda function will call translate to translate the text to users preferred language, then send the translation to Polly to generate mp3 audio, then we will send an email to the user with this information.
        </p>
        <div className="text-center">
          <img src="/assets/diagrams/phase5SES.png" alt="" />
        </div>
      </section>
      <section>
        <h3>1. Update the lambda function to integrate with AWS SES service</h3>
        <p>
          Update the lambda function to send an email to the subscribed user using Amazon SES service.
        </p>
        <p>
          Add the following code to your lambda function to send an email to the subscribed user:
        </p>
        <LambdaCode4Ses/>
      </section>
      <section>
        <h3>Update YAML Lambda Timeout, Lambda Policy for SES permissions and add environment variable</h3>
        <TemplaceCodeSES/>
      </section>
      <section>
        <h3>WARNING:</h3>
        <p>WARNING!!! Out architecture is very monolithic and the lambda function is not efficient. This will cause timeouts in the function. That is why we had to increase the function timeout in the YAML file. This is NOT best practice. We will learn how to improve this soon.</p>
        <p>Microsoft Outlook emails as recipients seem to have issues by default. Please try yahoo or gmail.</p>
      </section>
      {/* conclusion */}
      <section>
        <h3>Conclusion</h3>
        <p>
          In this chapter, we learned how to send an email to the subscribed user using Amazon SES service. We updated the lambda function to send an email to the subscribed user and added the necessary environment variables and permissions in the YAML file.
        </p>
      </section>
      <NavigationButtons previousPath="/basic/phase1:-monolith/text-to-speech" nextPath="/basic/phase1:-monolith/improvements-and-challenges" />
    </div>

  )
}

export default SendEmail