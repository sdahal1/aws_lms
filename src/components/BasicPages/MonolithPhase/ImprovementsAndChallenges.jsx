import React from 'react'
import NavigationButtons from '../../Reusable/NavigationButtons'

const ImprovementsAndChallenges = () => {
  return (
    <div>
      <h2 className='text-center'>Improvements and Challenges</h2>
      <hr />
      <section>
        <h3>Drawbacks of Monolithic Lambda</h3>
        {/* - Drawbacks of lambda monolith
    
    This approach has several drawbacks:
    
    - **Package size**: the Lambda function may be much larger because it contains all possible code for all paths, which makes it slower for the Lambda service to download and run.
    - **Hard to enforce least privilege**: the function’s IAM role must allow permissions to all resources needed for all paths, making the permissions very broad. Many paths in the functional monolith do not need all the permissions that have been granted.
    - **Harder to upgrade**: in a production system, any upgrades to the single function are more risky and could cause the entire application to stop working. Upgrading a single path in the Lambda function is an upgrade to the entire function.
    - **Harder to maintain**: it’s more difficult to have multiple developers working on the service since it’s a monolithic code repository. It also increases the cognitive burden on developers and makes it harder to create appropriate test coverage for code.
    - **Harder to reuse code**: typically, it can be harder to separate reusable libraries from monoliths, making code reuse more difficult. As you develop and support more projects, this can make it harder to support the code and scale your team’s velocity.
    - **Harder to test**: as the lines of code increase, it becomes harder to unit all the possible combinations of inputs and entry points in the code base. It’s generally easier to implement unit testing for smaller services with less code. */}
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*6FC_6slSGi3GyQP_5zMLLw.png" alt="" />
        <p>
          This approach has several drawbacks:
        </p>
        <ul>
          <li><strong>Package size:</strong> the Lambda function may be much larger because it contains all possible code for all paths, which makes it slower for the Lambda service to download and run.</li>
          <li><strong>Hard to enforce least privilege:</strong> the function’s IAM role must allow permissions to all resources needed for all paths, making the permissions very broad. Many paths in the functional monolith do not need all the permissions that have been granted.</li>
          <li><strong>Harder to upgrade:</strong> in a production system, any upgrades to the single function are more risky and could cause the entire application to stop working. Upgrading a single path in the Lambda function is an upgrade to the entire function.</li>
          <li><strong>Harder to maintain:</strong> it’s more difficult to have multiple developers working on the service since it’s a monolithic code repository. It also increases the cognitive burden on developers and makes it harder to create appropriate test coverage for code.</li>
          <li><strong>Harder to reuse code:</strong> typically, it can be harder to separate reusable libraries from monoliths, making code reuse more difficult. As you develop and support more projects, this can make it harder to support the code and scale your team’s velocity.</li>
          <li><strong>Harder to test:</strong> as the lines of code increase, it becomes harder to unit all the possible combinations of inputs and entry points in the code base. It’s generally easier to implement unit testing for smaller services with less code.</li>
          <li><strong>Code Structure and Modularity:</strong> The lambda handler function is doing too much. It's responsible for DynamoDB interactions, translation, audio synthesis, and email sending. This violates the Single Responsibility Principle (SRP). It's better to break down the functionality into smaller, more focused functions, each responsible for a single task. This improves code readability, maintainability, and testability.</li>
        </ul>
        <p>The preferred alternative is to decompose the monolithic Lambda function into individual microservices, mapping a single Lambda function to a single, well-defined task. In this simple web application with a few API endpoints, the resulting microservice-based architecture can be based upon the API Gateway routes.</p>
      </section>
      <section>
        <h3>How much functionality should a single lambda function have?</h3>
        <p>
          The function should perform a single task in the flow of data across AWS services in your microservice. However, if the functional task is too small, this may incur additional latency in the application and overhead in managing large numbers of functions. The exact scope of a function is determined by the use case.
        </p>
        
      </section>
      <section>
        <h3>Cost Inefficiencies</h3>
        <img src="https://gifdb.com/images/high/money-falling-400-x-250-gif-7oxciw20n1oz28du.gif" alt="" className='mb-3' />
        <p>
          When a Lambda function becomes monolithic and tries to handle too many things, several cost considerations and drawbacks arise:
        </p>
        <ul>
          <li><strong>Cold Start Impact:</strong> A monolithic function handling a large number of requests can experience significant cold start times, especially when dealing with high concurrency. For example, with a cold start time of 4548.791 milliseconds, if we have 1 million requests, the total cold start time would be:
            Total Cold Start Time = Cold Start Time * Number of Requests = 4548.791 ms * 1,000,000 = 4548791000 ms = 4548.791 s
          </li>
          <li><strong>Concurrency Limits:</strong> Lambda has concurrency limits, which can lead to throttling if the function is handling too many requests simultaneously. For instance, if we have 40 million requests, the concurrency limit may cause some requests to be delayed or rejected.</li>
          <li><strong>Cost:</strong> Lambda costs are based on the number of requests and the execution time. With 40 million requests and an execution time of 4548.791 milliseconds, the cost can be calculated as follows:
            Total Execution Time = Execution Time per Request * Number of Requests
            Total Execution Time = 4548.791 ms * 40,000,000 = 181951640000 ms = 181951.64 s
            Total Cost = Total Execution Time (in seconds) * Cost per 100ms of Execution Time * Number of Requests
            Assuming a cost of $0.0000166667 per 100ms of execution time, the total cost would be:
            Total Cost = 181951.64 s * $0.0000166667/100ms * 40,000,000 = $121491.70
          </li>
          <li><strong>Operational Complexity:</strong> A monolithic function can be harder to maintain and debug, as all the functionality is contained in a single codebase. This can lead to longer development and troubleshooting times.</li>
          <li><strong>Scalability Issues:</strong> A monolithic function may not scale efficiently, as any changes or updates to the function affect the entire application. This can limit the ability to scale specific parts of the application independently.</li>
        </ul>
        <p>To address these issues, it's often recommended to break down the monolithic function into smaller, more focused functions that can scale and be managed more effectively.</p>

      </section>

      <NavigationButtons previousPath="/basic/phase1:-monolith/send-email" nextPath="/basic/phase2:-scalable-and-asynchronous/simple-queue-service-(sqs)" />
    </div>
  )
}

export default ImprovementsAndChallenges