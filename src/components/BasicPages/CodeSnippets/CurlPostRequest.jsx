import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CurlPostRequest = () => {
  const codeString = `
curl -X POST https://pf1q7jrbq2.execute-api.us-west-2.amazonaws.com/Prod/subscribe/ \ \n
-H "Content-Type: application/json" \ \n
-d '{"fullName": "Rob Dahal", "email": "sdahal1@yahoo.com", "phone": "1234567890", "state": "California", "county": "Santa Clara", "preferredLanguage": "English"}'
`;

  return <div className='codeblock'>
    <SyntaxHighlighter id="width-codeblock" language="yaml" style={nord}>{codeString}</SyntaxHighlighter>
  </div>
}

export default CurlPostRequest;
