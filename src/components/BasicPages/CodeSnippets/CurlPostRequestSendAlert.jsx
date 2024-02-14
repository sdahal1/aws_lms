import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CurlPostRequestSendAlert = () => {
  const codeString = `
curl -X POST https://pf1q7jrbq2.execute-api.us-west-2.amazonaws.com/Prod/sendAlert/ -H "Content-Type: application/json" -d '{ "state": "California", "message": "Sunny day alert! Please wear a hat and sunscreen."}'
`;

  return <div className='codeblock'>
    <SyntaxHighlighter id="width-codeblock" language="yaml" style={nord}>{codeString}</SyntaxHighlighter>
  </div>
}

export default CurlPostRequestSendAlert;
