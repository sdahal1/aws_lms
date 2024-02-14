import React from 'react'
import { Link } from 'react-router-dom'

const RealWorldScenario = () => {
  return (
    <div>
      <h3 className='text-center'>Real World Scenario</h3>
      <hr />
      {/* Use Case: Emergency notification system for subscribing users and sending mass alerts  */}
      <h4>Use Case: Emergency notification system for subscribing users and sending mass alerts</h4>
      <div className='text-center p-4'>
        <img src="/assets/emergency_alert.jpeg" alt="" />
      </div>
      <section>
        <h2>Background:</h2>
        <p>
          In this lab, we will demonstrate how to leverage serverless technologies to implement an Emergency Notification System. When a significant event occurs, a Lambda function will be triggered to generate a voicemail message in the customer's preferred language. This Lambda function will utilize AWS Translate to convert text to other languages and AWS Polly to synthesize the text into voice, generating an MP3 file stored in Amazon S3. The pre-signed URL to the MP3 file will then be emailed to the customer, along with the message in plain text written in their preferred language.
        </p>
      </section>
      <section>
        <h2>So why serverless? </h2>
        <ol>
          <li>
            Scaling and High Availability 
            <ul>
              <li>For emergency notifications, its a must that we can reach mass amounts of people at once, reliably. Some infrastructure may be damaged so we need fault tolerance.</li>
              <li>Emergencies don't happen all the time, so we also don't need to waste resources keeping a system up an running.</li>
              <li>Applications built with a serverless infrastructure will scale automatically as the user base grows or usage increases. If a function needs to be run in multiple instances, the vendor's servers will start up, run, and end them as they are needed, often using containers.</li>
            </ul>
          </li>

          <li>
            Maintenence
            <ul>
              <li>A traditional dedicated server approach will require that the server is maintained, patched, and kept ready by the business. Doesn't seem like the best case for a service that only needs to be used in random moments.</li>
              <li>
                With serverless, the cloud provider takes care of the infrastructure, and the business only pays for what is used.
              </li>
              <li>
                This is a great use case for serverless, as the business can focus on the application, and not the infrastructure.
              </li>
            </ul>
          </li>
          <li>
            Cost
            <ul>
              <li>With serverless, you only pay for what you use. This is a great use case for a service that is only used in emergencies.</li>
              <li>There is no need to pay for a server that is sitting idle.</li>
              <li>Serverless architectures will reduce costs for applications that see inconsistent usage, with peak periods alternating with times of little to no traffic.</li>
            </ul>
          </li>
        </ol>
      </section>
      <section>
        <h2>Breaking down the numbers:</h2>
        <p>Imagine if there was a big earthquake in Los Angeles</p>
        <ul>
          <li>Population of Los Angeles: 4 million</li>
          <li>Population of Los Angeles County: 10 million</li>
          <li>Population of Southern California: 24 million</li>
          <li>Population of California: 40 million</li>
        </ul>
        <p className='mb-3'>What if we needed to reach everyone in the United States?</p>
        <h4 className='mb-3'>Expected usage: </h4>
        <ul>
          <li>Normal usage: 0</li>
          <li>Emergency usage: 40 million</li>
          <li><b>Transactions per Second (TPS):</b> The surge to 10,000 TPS during peak hours is essential to handle the influx of notifications effectively, minimizing delays in critical information dissemination</li>
          <li><b>High Availability Requirement:</b> The need for 99.999% uptime (5-nines) is paramount to guarantee uninterrupted service delivery during emergencies, enabling users to rely on timely notifications.</li>
        </ul>
        <h4 className="mb-3"></h4>
      </section>
      <section>
        <h3>Conclusion</h3>
        <p>This type of service benefits most from serverless architecture if you see that it needs to scale from 0 to 40 million users in an instant. Also most of the time, it doesn't need to be active, so we wouldn't want to pay for its inactive duration. Pay only for what you use, when you use it, with high level of realiability, scalability, and minimal maintenence.</p>
      </section>
      <div className='d-flex m-2 justify-content-end align-items-center'>
        {/* next and previous buttons */}
        <div>
          {/* <Link to="/basic/introduction-and-prerequisites/prerequisites" className="btn btn-primary">Previous</Link> */}
        </div>
        <div>
          <Link to="/challenge/introduction-and-prerequisites/architecture-overview" className="btn btn-warning m-2">Next</Link>
        </div>
      </div>
    </div>
  )
}

export default RealWorldScenario