import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

const S3BucketSnippet = () => {
  const codeString = `
# S3 BUCKET FOR VOICE AUDIO
VoiceAudioBucket:
  Type: AWS::S3::Bucket
  Properties:
    BucketName: !Sub "voice-audio-bucket-\${AWS::AccountId}-\${AWS::Region}-\${AWS::StackName}"
    AccessControl: Private
`

  return <div className='codeblock'>
    <SyntaxHighlighter id="width-codeblock" language="yaml" style={nord}>{codeString}</SyntaxHighlighter>
    
    </div>
}

export default S3BucketSnippet;
