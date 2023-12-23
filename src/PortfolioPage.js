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
          />
          <ImageCard 
            imageUrl="./my-react-app/receiptable.png"
            linkText="Receipt-Able (Python, mySQL, pytesseract)"
            bottomImageUrl1="./my-react-app/github-mark.png"
            bottomImageUrl2="./my-react-app/youtube-logo.png"
            imgUrl1="https://www.youtube.com/watch?v=mmw3GoQl4Uk"
            imgUrl2="https://github.com/hlee18lee46/aiatlhack"
          />
          <ImageCard 
            imageUrl="./my-react-app/onthehouse.png"
            linkText="On the House (Python, SQL)"
            bottomImageUrl1="./my-react-app/github-mark.png"
            bottomImageUrl2="./my-react-app/youtube-logo.png"
            imgUrl1="https://github.com/anthonyg876/Software-engineering-project"
            imgUrl2="https://www.youtube.com/watch?v=QLQUJKN_pIY"
          />
          <ImageCard 
            imageUrl="./my-react-app/excelerate.png"
            linkText="Excelerate (Python, Pandas, Plotly, Langchain)"
            bottomImageUrl1="./my-react-app/github-mark.png"
            bottomImageUrl2="./my-react-app/youtube-logo.png"
            imgUrl1="https://github.com/BinaryBills/HackDearborn2023Work"
            imgUrl2="https://www.youtube.com/watch?v=8HPEsjFq28o"
          />

      </div>
    </div>

  );
}

export default PortfolioPage;
