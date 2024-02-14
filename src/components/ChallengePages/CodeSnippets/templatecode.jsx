import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SamTemplateCode = () => {
  const codeString = `
# This line specifies the version of the AWS CloudFormation template format being used.
AWSTemplateFormatVersion: '2010-09-09'

# The Transform property specifies that this template uses the AWS Serverless Application Model (SAM) transform.
Transform: AWS::Serverless-2016-10-31

# The Description property provides a description of the SAM template.
Description: >
  sam-app

  Sample SAM Template for sam-app

# The Globals section defines settings that apply to all resources in the template.
Globals:
  Function:
    Timeout: 3  # Sets the maximum execution time for Lambda functions to 3 seconds.
    MemorySize: 128  # Sets the memory size allocated to Lambda functions to 128 MB.

    Tracing: Active  # Enables AWS X-Ray tracing for Lambda functions.

    # The LoggingConfig property configures logging for Lambda functions.
    # In this example, it sets the log format to JSON.
    LoggingConfig:
      LogFormat: JSON
  Api:
    TracingEnabled: true  # Enables AWS X-Ray tracing for API Gateway APIs.

# The Resources section defines the AWS resources that will be created by this template.
Resources:
  # HelloWorldFunction is a Lambda function resource.
  HelloWorldFunction:
    Type: AWS::Serverless::Function  # Specifies the resource type as a Lambda function.
    Properties:
      CodeUri: hello_world/  # Specifies the path to the code for the Lambda function.
      Handler: app.lambda_handler  # Specifies the handler function for the Lambda function.
      Runtime: python3.9  # Specifies the runtime environment for the Lambda function.
      Architectures:
      - x86_64  # Specifies the architecture for the Lambda function.
      Events:
        HelloWorld:
          Type: Api  # Specifies that the Lambda function will be triggered by an API Gateway API.
          Properties:
            Path: /hello  # Specifies the API endpoint path.
            Method: get  # Specifies the HTTP method for the API endpoint.

  # ApplicationResourceGroup is a resource group resource.
  ApplicationResourceGroup:
    Type: AWS::ResourceGroups::Group  # Specifies the resource type as a resource group.
    Properties:
      Name:
        Fn::Sub: ApplicationInsights-SAM-\${AWS::StackName}  # Specifies the name of the resource group.
      ResourceQuery:
        Type: CLOUDFORMATION_STACK_1_0  # Specifies the type of resource query.

  # ApplicationInsightsMonitoring is an Application Insights resource.
  ApplicationInsightsMonitoring:
    Type: AWS::ApplicationInsights::Application  # Specifies the resource type as an Application Insights application.
    Properties:
      ResourceGroupName:
        Ref: ApplicationResourceGroup  # Specifies the resource group for the Application Insights application.
      AutoConfigurationEnabled: 'true'  # Enables auto-configuration for the Application Insights application.

# The Outputs section defines the outputs of the template.
Outputs:
  # HelloWorldApi is an output that provides the API Gateway endpoint URL for the Hello World function.
  HelloWorldApi:
    Description: API Gateway endpoint URL for Prod stage for Hello World function
    Value: !Sub "https://\${ServerlessRestApi}.execute-api.\${AWS::Region}.amazonaws.com/Prod/hello/"

  # HelloWorldFunction is an output that provides the ARN of the Hello World Lambda function.
  HelloWorldFunction:
    Description: Hello World Lambda Function ARN
    Value: !GetAtt HelloWorldFunction.Arn

  # HelloWorldFunctionIamRole is an output that provides the ARN of the IAM role created for the Hello World function.
  HelloWorldFunctionIamRole:
    Description: Implicit IAM Role created for Hello World function
    Value: !GetAtt HelloWorldFunctionRole.Arn`;

  return <SyntaxHighlighter id="width-codeblock" language="yaml" style={nord}>{codeString}</SyntaxHighlighter>;
}

export default SamTemplateCode;
