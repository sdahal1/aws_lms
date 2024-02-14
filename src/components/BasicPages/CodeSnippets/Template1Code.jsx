import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Template1Code = () => {
  const codeString = `
  # This line specifies the version of the AWS CloudFormation template format being used.
  AWSTemplateFormatVersion: "2010-09-09"
  
  # The Transform property specifies that this template uses the AWS Serverless Application Model (SAM) transform.
  Transform: AWS::Serverless-2016-10-31
  
  # The Description property provides a description of the SAM template.
  Description: >
    sam-app
  
    Sample SAM Template for sam-app
  
  # The Globals section defines settings that apply to all resources in the template.
  Globals:
    Function:
      Timeout: 3 # Sets the maximum execution time for Lambda functions to 3 seconds.
      MemorySize: 128 # Sets the memory size allocated to Lambda functions to 128 MB.
  
      Tracing: Active # Enables AWS X-Ray tracing for Lambda functions.
  
      # The LoggingConfig property configures logging for Lambda functions.
      # In this example, it sets the log format to JSON.
      LoggingConfig:
        LogFormat: JSON
      Environment: # Configures environment variables for Lambda functions.
        Variables:  # Defines environment variables for all Lambda functions.
          REGION: !Ref AWS::Region  # Sets the REGION environment variable to the AWS region where the Lambda function is deployed.
    Api:
      TracingEnabled: true # Enables AWS X-Ray tracing for API Gateway APIs.
  
  # The Resources section defines the AWS resources that will be created by this template.
  Resources:
    # ADDED ROLES FOR LAMBDA FUNCTION TO BE ABLE TO CREATE ITEMS IN DYNAMO DB
    MyLambdaRole:
      Type: AWS::IAM::Role # Specify that this is an IAM Role resource
      Properties:
        AssumeRolePolicyDocument: # Define the policy that allows the role to be assumed
          Version: "2012-10-17" # Specify the policy version
          Statement: # Define the statements in the policy
            - Effect: Allow # Allow the specified actions
              Principal: # Specify the entity (AWS service or user) that can assume the role
                Service: lambda.amazonaws.com # Allow the Lambda service to assume the role
              Action: # Specify the actions that are allowed
                - sts:AssumeRole # Allow the AssumeRole action for the Lambda service
        Policies: # Define the policies attached to the role
          - PolicyName: cloudwatchlogs # Name of the policy
            PolicyDocument: # Define the policy document for the CloudWatch Logs policy
              Version: 2012-10-17 # Specify the policy version
              Statement: # Define the statements in the policy
                - Effect: Allow # Allow the specified actions
                  Action: # Specify the actions that are allowed
                    - "logs:CreateLogGroup" # Allow creating log groups
                    - "logs:CreateLogStream" # Allow creating log streams
                    - "logs:PutLogEvents" # Allow putting log events
                  Resource: "arn:aws:logs:*:*:*" # Specify the resource ARN (wildcard for all log groups and streams)
  
          - PolicyName: LambdaPermissionsPolicy # Name of the policy
            PolicyDocument: # Define the policy document for the Lambda Permissions policy
              Version: "2012-10-17" # Specify the policy version
              Statement: # Define the statements in the policy
                - Effect: Allow # Allow the specified actions
                  Action: # Specify the actions that are allowed
                    - "dynamodb:PutItem" # Allow putting items in DynamoDB
                    - "dynamodb:GetItem" # Allow getting items from DynamoDB
                    - "dynamodb:UpdateItem" # Allow updating items in DynamoDB
                    - "dynamodb:DeleteItem" # Allow deleting items from DynamoDB
                  Resource: "*" # Specify the resource ARN (wildcard for all resources)
  
    # ADDED LAMBDA FUNCTION TO ENROLL SUBSCRIBERS
    EnrollSubscriberFunction:
      Type: AWS::Serverless::Function
      Properties:
        CodeUri: handlers/enrollSubscriber
        Handler: enrollSubscriber.lambda_handler
        Runtime: python3.9
        Architectures: # Specifies the architecture for the Lambda function.
          - x86_64
        Role: !GetAtt MyLambdaRole.Arn
        Events: # Defines events that trigger the Lambda function.
          EnrollSubscriberApi: # Specifies an API Gateway event named EnrollSubscriberApi that triggers the Lambda function.
            Type: Api # Specifies that the event source is an API Gateway endpoint.
            Properties: # Defines properties of the API Gateway event.
              RestApiId: !Ref SubscribeApi
              Path: /subscribe
              Method: post
        Environment: # Define environment variables here
          Variables:
            TABLE_NAME: !Ref SubscribersTable
            
    # ADDED DYNAMO DB TABLE TO STORE USERS WHO SUBSCRIBE FOR NOTIFICATIONS
    SubscribersTable:
      Type: AWS::DynamoDB::Table
      Properties:
        AttributeDefinitions:
          - AttributeName: "id"
            AttributeType: "S"
        KeySchema:
          - AttributeName: "id"
            KeyType: "HASH"
        BillingMode: PAY_PER_REQUEST
  
    # API GATEWAY TO HANDLE OUR APPS REQUESTS
    SubscribeApi:
      Type: AWS::Serverless::Api
      Properties:
        StageName: Prod
        Cors:
          AllowMethods: "'GET,POST,PUT,DELETE,OPTIONS'"
          AllowHeaders: "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'"
          AllowOrigin: "'*'"
  
    # ApplicationResourceGroup is a resource group resource.
    ApplicationResourceGroup:
      Type: AWS::ResourceGroups::Group # Specifies the resource type as a resource group.
      Properties:
        Name:
          Fn::Sub: ApplicationInsights-SAM-\${AWS::StackName} # Specifies the name of the resource group.
        ResourceQuery:
          Type: CLOUDFORMATION_STACK_1_0 # Specifies the type of resource query.
  
    # ApplicationInsightsMonitoring is an Application Insights resource.
    ApplicationInsightsMonitoring:
      Type: AWS::ApplicationInsights::Application # Specifies the resource type as an Application Insights application.
      Properties:
        ResourceGroupName:
          Ref: ApplicationResourceGroup # Specifies the resource group for the Application Insights application.
        AutoConfigurationEnabled: 'true' # Enables auto-configuration for the Application Insights application.
  
  # The Outputs section defines the outputs of the template.
  Outputs:
    SubscribeApi: # Output name for the API Gateway endpoint URL.
      Description: API Gateway endpoint URL for the Hello World function
      Value: !Sub "https://\${SubscribeApi}.execute-api.\${AWS::Region}.amazonaws.com/Prod/subscribe/"
    SubscribersTableArn:
      Description: "DynamoDB Table Arn"
      Value: !GetAtt SubscribersTable.Arn
`;

  return <div className='codeblock'>
    <SyntaxHighlighter id="width-codeblock" language="yaml" style={nord}>{codeString}</SyntaxHighlighter>;
    
    </div>
}

export default Template1Code;
