import React from 'react'
import NavigationButtons from '../../Reusable/NavigationButtons'

const MicroImprovements = () => {
  return (
    <div>
      <h3 className='text-center'>How did we improve?</h3>
      <p>
        Lets compare the latency of our monolithic application with the microservices application.
      </p>
      <section>
        <div className="row">
          <div className="col-md-6">
            <h4>Microservices Application Warm Start Time</h4>
            <p>Billed Duration: 493ms</p>
            <img src="/assets/starts/microservice_warm_start.png" alt="" width="600px" />
          </div>
          <div className="col-md-6">
            <h4>Monolithic Application Warm Start Time</h4>
            <p>Billed Duration: 1460ms</p>
            <img src="/assets/starts/monolith_warm_start.png" alt="" width="600px" />
          </div>
        </div>
      </section>
      <NavigationButtons previousPath="/advanced/phase2:-scalable-and-asynchronous/updating-our-application-to-use-sqs" nextPath="/advanced/phase2:-scalable-and-asynchronous/mass-alert" />
    </div>
  )
}

export default MicroImprovements