import React from 'react'
import NavigationButtons from '../../Reusable/NavigationButtons'

const SQS = () => {
  return (
    <div>
      <h2 className='text-center'>Simple Queue Service (SQS)</h2>
      <hr />
      <section>
        <h3>What is Simple Queue Service (SQS)?</h3>
        <p>
          Amazon Simple Queue Service (Amazon SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. Amazon SQS moves data between distributed application components and helps you decouple these components.
        </p>
        <p>
          Using Amazon SQS, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available. Amazon SQS makes it easy to build an architecture that automatically takes care of the scaling and operational health of the messaging system and includes other benefits such as built-in security, encryption, and compliance.
        </p>
        <p>
          Amazon SQS offers two types of message queues. Standard queues offer maximum throughput, best-effort ordering, and at-least-once delivery. SQS FIFO queues are designed to guarantee that messages are processed exactly once, in the exact order that they are sent.
        </p>
      </section>
      <section>
        <h3>How does it work?</h3>
        <p>
          Amazon SQS offers a reliable, highly scalable, hosted queue for storing messages as they travel between computers. By using Amazon SQS, you can move data between distributed components of your applications that perform different tasks without losing messages or requiring each component to be always available. Amazon SQS is a distributed queue system that enables web service applications to quickly and reliably queue messages that one component in the application generates to be consumed by another component. A queue is a temporary repository for messages that are awaiting processing. Using Amazon SQS, you can decouple the components of an application so they run independently, with Amazon SQS easing message management between components.
        </p>
        <p>
          Amazon SQS is a distributed system that enables web service applications to quickly and reliably queue messages that one component in the application generates to be consumed by another component. A queue is a temporary repository for messages that are awaiting processing. Using Amazon SQS, you can decouple the components of an application so they run independently, with Amazon SQS easing message management between components.
        </p>
      </section>
      <section>
        <h3>How to use it?</h3>
        <p>
          To use Amazon SQS, you need to create a queue in the AWS Management Console or by using the Amazon SQS API. You can then send messages to the queue and receive messages from the queue. You can also use Amazon SQS to move data between distributed components of your applications that perform different tasks without losing messages or requiring each component to be always available.
        </p>
        <p>
          Amazon SQS offers a reliable, highly scalable, hosted queue for storing messages as they travel between computers. By using Amazon SQS, you can move data between distributed components of your applications that perform different tasks without losing messages or requiring each component to be always available. Amazon SQS is a distributed queue system that enables web service applications to quickly and reliably queue messages that one component in the application generates to be consumed by another component. A queue is a temporary repository for messages that are awaiting processing. Using Amazon SQS, you can decouple the components of an application so they run independently, with Amazon SQS easing message management between components.
        </p>
      </section>
      <section>
        <h3 className="text-center">Architecture overview</h3>
        <div className='text-center'>
          <img src="/assets/diagrams/microPhase1.png" alt="" />
        </div>
        <p className='my-3'>
          The architecture of the application is as follows:
        </p>
        <ul className='my-3'>
          {/* User makes request, but this system can scale up to millions of users making requests. Next, the lambda function will push a message to the queue so that the function can stop running. A lambda function on the recieving end (subscriber) to the SQS will dequeue the queue and process the queued message in a scalable manner. The rest of the flow will result in translation, speech synthesis, and email send.*/}
          <li>User makes a request to the API Gateway endpoint.</li>
          <li>API Gateway invokes the Lambda function.</li>
          <li>Lambda function pushes a message to the queue.</li>
          <li>Lambda function stops running.</li>
          <li>Lambda function on the receiving end (subscriber) dequeues the queue and processes the queued message in a scalable manner.</li>
          <li>Translation, speech synthesis, and email send lambda functions run in scalable distributed manner.</li>
        </ul>
      </section>
      <section>
        <h3>Why should we use SQS here?</h3>
        {/* 
        Latency: API returns a response as soon as it pushes the order into the queue. It does not wait till the email gets sent. This is the beauty of asynchronous operations. It significantly decreases latency and improves UX, effectively allowing developers to build highly scalable applications with minimal performance bottlenecks.
        
        Decoupling Publishers and Consumers: SQS decouples the message producers (publishers) from the message consumers (consumers), providing a level of abstraction between them. This means that publishers can enqueue messages into the queue without needing to know anything about the consumers, and consumers can retrieve messages from the queue without needing to know anything about the publishers.
        
        Scalability and Fault Tolerance: SQS is designed to be highly scalable and fault-tolerant. It can handle large volumes of messages and automatically scale to accommodate increased message traffic. Additionally, SQS ensures that messages are delivered reliably, even in the event of failures or outages.

        Scalability and Backpressure: SQS can handle a large volume of messages and provides built-in mechanisms for handling backpressure. If the consumer Lambda functions are unable to keep up with the incoming messages, SQS will automatically scale to accommodate the load and ensure that messages are not lost.
        */}
        <p>
          There are several reasons why we should use Amazon SQS in this architecture:
        </p>
        <ul>
          <li>Latency: API returns a response as soon as it pushes the order into the queue. It does not wait till the email gets sent. This is the beauty of asynchronous operations. It significantly decreases latency and improves UX, effectively allowing developers to build highly scalable applications with minimal performance bottlenecks.</li>
          <li>Decoupling Publishers and Consumers: SQS decouples the message producers (publishers) from the message consumers (consumers), providing a level of abstraction between them. This means that publishers can enqueue messages into the queue without needing to know anything about the consumers, and consumers can retrieve messages from the queue without needing to know anything about the publishers.</li>
          <li>Scalability and Fault Tolerance: SQS is designed to be highly scalable and fault-tolerant. It can handle large volumes of messages and automatically scale to accommodate increased message traffic. Additionally, SQS ensures that messages are delivered reliably, even in the event of failures or outages.</li>
          <li>Scalability and Backpressure: SQS can handle a large volume of messages and provides built-in mechanisms for handling backpressure. If the consumer Lambda functions are unable to keep up with the incoming messages, SQS will automatically scale to accommodate the load and ensure that messages are not lost.</li>
        </ul>
      </section>
      <NavigationButtons previousPath="/basic/phase1:-monolith/improvements-and-challenges" nextPath="/basic/phase2:-scalable-and-asynchronous/updating-our-application-to-use-sqs" />
    </div>
  )
}

export default SQS