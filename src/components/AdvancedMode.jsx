import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import LearningObjectives from './AdvancedPages/Intro/LearningObjectives'
import Prerequisites from './AdvancedPages/Intro/Prerequisites'
import ArchitectureOverview from './AdvancedPages/Intro/ArchitectureOverview'
import RealWorldScenario from './AdvancedPages/Intro/RealWorldScenario'
import AWSAccount from './AdvancedPages/Setup/AWSAccount'
import Cloud9 from './AdvancedPages/Setup/Cloud9'
import EmailVerification from './AdvancedPages/Setup/EmailVerification'
import SAM from './AdvancedPages/Setup/SAM';
import HelloWorld from './AdvancedPages/MonolithPhase/HelloWorld';
import NewUser from './AdvancedPages/MonolithPhase/NewUser';
import TranslateMessages from './AdvancedPages/MonolithPhase/TranslateMessages';
import TextToSpeech from './AdvancedPages/MonolithPhase/TextToSpeech';
import SendEmail from './AdvancedPages/MonolithPhase/SendEmail';
import ImprovementsAndChallenges from './AdvancedPages/MonolithPhase/ImprovementsAndChallenges';
import SQS from './AdvancedPages/MicroservicesPhase/SQS';
import UpdateAPP from './AdvancedPages/MicroservicesPhase/UpdateAPP';
import MicroImprovements from './AdvancedPages/MicroservicesPhase/MicroImprovements'
import MassAlert from './AdvancedPages/MicroservicesPhase/MassAlert'

const AdvancedMode = () => {
  const CHAPTERS = [
    {
      num: 1,
      title: "Introduction and Prerequisites",
      subchapters: [
        "Real-world Scenario",
        "Architecture Overview",
        "Learning Objectives",
        "Prerequisites",
      ]
    },
    {
      num: 2, 
      title: "Setup",
      subchapters: [
        "AWS Account - IAM User",
        "Cloud9 IDE Setup",
        "AWS SAM",
        "Email Verification in SES",
      ]
    },
    { num: 3, 
      title: "Phase1: Monolith",
      subchapters: [
        "Create Hello World with SAM",
        "Create new User",
        "Translation of messages",
        "Text to Speech",
        "Send Email",
        "Improvements and Challenges",
      ]
    },
    { num: 4, 
      title: "Phase2: Scalable and Asynchronous",
      subchapters: [
        "Simple Queue Service (SQS)",
        "Updating our application to use SQS",
        "Improvements and Challenges",
        "Mass Alert",
      ]
    }
  ]
  // write function that will take string and return string with spaces replaced with dashes and all lowercase
  const formatTitle = (title) => {
    return title.replace(/\s/g, '-').toLowerCase()
  }


  return (
      <div className="d-flex">
        <div className="nav flex-column me-3 nav-bg p-2 side-bar">
          {CHAPTERS.map((chapter, index) => (
            <>
            <p key={index} className="text-light text-decoration-none nav-chapter-title" >- {chapter.title}</p>
            {chapter.subchapters.map((subchapter, index) => (
              <Link to={`/advanced/${formatTitle(chapter.title)}/${formatTitle(subchapter)}`} key={index} className="nav-subchapter-title text-light text-decoration-none">{subchapter}</Link>
            )
            )}
            </>
          ))}
        </div>
        <div className='p-2 border main-content'>
          <h1>Advanced Mode:</h1>
          <em>Note: You can find the code solution here: <a href="https://github.com/sdahal1/aws_lab_serverless_final">Serverless APP Solution</a></em>
        <Routes>
          <Route path={"/introduction-and-prerequisites/learning-objectives"} element={<LearningObjectives/>} />
          <Route path={"/introduction-and-prerequisites/prerequisites"} element={<Prerequisites/>} />
          <Route path={"/introduction-and-prerequisites/architecture-overview"} element={<ArchitectureOverview/>} />
          <Route path={"/introduction-and-prerequisites/real-world-scenario"} element={<RealWorldScenario/>} />
          <Route path={"/setup/aws-account---iam-user"} element={<AWSAccount></AWSAccount>} />
          <Route path={"/setup/cloud9-ide-setup"} element={<Cloud9/>} />
          <Route path={"/setup/email-verification-in-ses"} element={<EmailVerification/>} />
          <Route path={"/setup/aws-sam"} element={<SAM/>} />
          <Route path={"/phase1:-monolith/create-hello-world-with-sam"} element={<HelloWorld/>} />
          <Route path={"/phase1:-monolith/create-new-user"} element={<NewUser/>} />
          <Route path={"/phase1:-monolith/translation-of-messages"} element={<TranslateMessages/>} />
          <Route path={"/phase1:-monolith/text-to-speech"} element={<TextToSpeech/>} />
          <Route path={"/phase1:-monolith/send-email"} element={<SendEmail/>} />
          <Route path={"/phase1:-monolith/improvements-and-challenges"} element={<ImprovementsAndChallenges/>} />
          <Route path={"/phase2:-scalable-and-asynchronous/simple-queue-service-(sqs)"} element={<SQS/>} />
          <Route path={"/phase2:-scalable-and-asynchronous/updating-our-application-to-use-sqs"} element={<UpdateAPP/>} />
          <Route path={"/phase2:-scalable-and-asynchronous/improvements-and-challenges"} element={<MicroImprovements/>} />
          <Route path={"/phase2:-scalable-and-asynchronous/mass-alert"} element={<MassAlert/>} />
        </Routes>
        </div>
      </div>
  )
}

export default AdvancedMode