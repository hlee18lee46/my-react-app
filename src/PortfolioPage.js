import React from 'react';
import ImageCard from './ImageCard';
import './ImageCard.css'; // Importing CSS for styling
import HomePage from './HomePage';
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';
import logo from './logo.png';
import './PortfolioPage.css';

function PortfolioPage() {
  return (
    <div>
        <br></br><br></br><br></br>
        <div className="grid-containerQ">
            <ImageCard 
            
            imageUrl="./my-react-app/pioneer.png"
            linkText="Pioneer-Fleet (C#, Unity)"
            bottomImageUrl1="./my-react-app/github-mark.png"
            bottomImageUrl2="./my-react-app/youtube-logo.png"
            imgUrl1="https://github.com/mwalmer/Pioneer-Fleet"
            imgUrl2="https://www.youtube.com/watch?v=gKVrnjjkMgA"
            description="Pioneer-Fleet is a game that has different mini-games. I worked on building match-three mini game."
          />
          <ImageCard 
            imageUrl="./my-react-app/receiptable.png"
            linkText="Receipt-Able (Python, mySQL, pytesseract)"
            bottomImageUrl1="./my-react-app/github-mark.png"
            bottomImageUrl2="./my-react-app/youtube-logo.png"
            imgUrl1="https://www.youtube.com/watch?v=mmw3GoQl4Uk"
            imgUrl2="https://github.com/hlee18lee46/aiatlhack"
            description="Receipt-Able is OCR Web app that reads texts off receipts and displays the data. This was my solo project."
          />
          <ImageCard 
            imageUrl="./my-react-app/onthehouse.png"
            linkText="On the House (Python, Streamlit, Oracle SQL)"
            bottomImageUrl1="./my-react-app/github-mark.png"
            bottomImageUrl2="./my-react-app/youtube-logo.png"
            imgUrl1="https://github.com/anthonyg876/Software-engineering-project"
            imgUrl2="https://www.youtube.com/watch?v=QLQUJKN_pIY"
            description="On the House is a marketplace web app that a user can upload items. I worked on making different back-end functions of sql queries such as insertion of item data, fetching certain filtered data as a back-end developer in a team of four. "
          />
          <ImageCard 
            imageUrl="./my-react-app/excelerate.png"
            linkText="Excelerate (Python, Pandas, Plotly, Langchain)"
            bottomImageUrl1="./my-react-app/github-mark.png"
            bottomImageUrl2="./my-react-app/youtube-logo.png"
            imgUrl1="https://github.com/BinaryBills/HackDearborn2023Work"
            imgUrl2="https://www.youtube.com/watch?v=8HPEsjFq28o"
            description="Excelerate is AI-powered Agent to analyze and answer questions about the user input data. I worked on data transformation and visualization using pandas and plotly."
          />
            <ImageCard 
            imageUrl="./my-react-app/mergenote.png"
            linkText="MergeNote (Python, Flask, OpenAI API, GPT 4 Vision, SQLite)"
            bottomImageUrl1="./my-react-app/github-mark.png"
            bottomImageUrl2="./my-react-app/youtube-logo.png"
            imgUrl1="https://devpost.com/software/mergenote"
            imgUrl2="https://youtu.be/Nv_ktB4vz9c"
            description="Mergenote is a web application that user can upload a photo of notes and textbooks to convert image to texts and translate & summarize them. It was a solo project for GrizzHack"
          />
            <ImageCard 
            imageUrl="./my-react-app/aslforall.png"
            linkText="ASL for ALL (Python, Flask, GoogleAI API)"
            bottomImageUrl1="./my-react-app/github-mark.png"
            bottomImageUrl2="./my-react-app/youtube-logo.png"
            imgUrl1="https://devpost.com/software/asl-for-all-3084pv"
            imgUrl2="https://www.youtube.com/watch?v=lM-mUXGesGc"
            description="ASL for ALL is an AI-powered web application that converts human voice to texts and texts to American Sign Language. I worked a sole back-end developer."
          />
            <ImageCard 
            imageUrl="./my-react-app/textranslate.png"
            linkText="TexTranslate (Python, Flask, OpenAI API, Twilio)"
            bottomImageUrl1="./my-react-app/github-mark.png"
            bottomImageUrl2="./my-react-app/youtube-logo.png"
            imgUrl1="https://github.com/hlee18lee46"
            imgUrl2="https://youtu.be/fIEmWk2g-_8"
            description="TexTranslate is an application that receives text message (SMS) to a phone number and translate them in user's designated langugage via webhook of Twilio. It was a solo project for HackMT."
          />
            <ImageCard 
            imageUrl="./my-react-app/brainchain.png"
            linkText="BrainChain (Python, Flask, ipfs, metamask, web3)"
            bottomImageUrl1="./my-react-app/github-mark.png"
            bottomImageUrl2="./my-react-app/youtube-logo.png"
            imgUrl1="https://github.com/web3hackgroupluffy/BlockChainSubscriptionModel"
            imgUrl2="https://www.youtube.com/watch?v=3wUc4W3GDhQ"
            description="Brain Chain is a subscription-based blockchain service for sharing academic documents, where users receive Ethereum when another user subscribes to them. I built the file download/upload feature based on ipfs using requests and json python libraries."
            />
            <ImageCard 
            imageUrl="./my-react-app/communitysos.png"
            linkText="Community SOS (Typescript, TailwindCSS, Supabase)"
            bottomImageUrl1="./my-react-app/github-mark.png"
            bottomImageUrl2="./my-react-app/youtube-logo.png"
            imgUrl1="https://devpost.com/software/communitysos"
            imgUrl2="https://youtu.be/NNWj9b7hxZ0"
            description="Community SOS is a web application that allows users to post volunteer opportunities on the dashboard. I worked on the volunteer event create form and insertion command to supabase database."
          />
            <ImageCard 
            imageUrl="./my-react-app/android.png"
            linkText="Movie Summary Android App(Kotlin, API)"
            bottomImageUrl1="./my-react-app/github-mark.png"
            bottomImageUrl2="./my-react-app/youtube-logo.png"
            imgUrl1="https://github.com/hlee18lee46/prj4.codepath"
            imgUrl2="https://youtube.com/shorts/BREYrawg3_w"
            description="This android app is built with movie API to get the data and image of movies."
          />
      </div>
    </div>

  );
}

export default PortfolioPage;
