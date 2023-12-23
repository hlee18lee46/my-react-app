import React from 'react';
import './HomePage.css'; // Importing CSS for styling


function HomePage() {
  return (
    <div>
        <br></br><br></br><br></br>

      <div class="content-container">
        <div class="typewriter">
            <p>
                My Name is <b><i>Han Lee</i></b>.<br></br>
                You want to hear my <b>stories</b>?
            </p><br></br>
            <p1 id="delayedTextSix">
            I had been at a job where I didn't see my future...
            </p1><br></br><br></br>
            <p1 id="delayedTextTen">
            Then, I thought to myself, "I like building stuff...maybe with <b>computer</b>..."<br></br>
            "<b>What should I do?</b>, should I go back to... <b>school</b>?" 
            </p1><br></br><br></br>
            <p1 id="delayedTextSixteen">
            I did, to get a Bachelor's in Computer Sceince at University of Florida.<br></br>
            Now, I am looking for a <b>professional opportunity</b> to...<b>build stuff!!</b>
            </p1>
        </div>
        <img src="./my-react-app/grad_new.png" alt="me" class="right-image" />
    </div>

    </div>
  );
}

export default HomePage;
