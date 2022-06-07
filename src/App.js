import { useState } from "react";
import "./styles.css";

export default function App() {
  const [voteUsa, setVoteUsa] = useState(0);
  const [voteCanada, setVoteCanada] = useState(0);
  const [voteAustralia, setVoteAustralia] = useState(0);

  const handleCountAu = () => {
    setVoteAustralia((setVoteAustralia) => setVoteAustralia + 1);
  };
  const handleCountUs = () => {
    setVoteUsa((setVoteUsa) => setVoteUsa + 1);
  };
  const handleCountCanada = () => {
    setVoteCanada((setVoteCanada) => setVoteCanada + 1);
  };
  const handleClear = () => {
    setVoteAustralia(0);
    setVoteCanada(0);
    setVoteUsa(0);
  };

  return (
    <div className="App">
      <header>
        <h1>Country Voting System</h1>
      </header>
      <div></div>
      <main>
        <div class="card">
          <div class="img-container">
            <img src="https://wallpaperaccess.com/full/392814.jpg" alt="" />
            <span>USA</span>
            <br />
          </div>
          <br />
          <p>
            Vote count: <span id="usa-vote-input">{voteUsa}</span>
          </p>
          <button id="btn-usa-vote" onClick={() => handleCountUs()}>
            Vote
          </button>
        </div>
        <div class="card">
          <div class="img-container">
            <img
              src="https://media.istockphoto.com/photos/canadian-flag-image-full-frame-picture-id1156752196?b=1&k=20&m=1156752196&s=170667a&w=0&h=qTytjOf33-q6eTxki90ANCwNcZtUAjJpkCQ_1riGKT0="
              alt=""
            />
            <span>Canada</span>
          </div>

          <p>
            Vote count: <span id="canada-vote-input">{voteCanada}</span>
          </p>
          <button id="btn-canada-vote" onClick={() => handleCountCanada()}>
            Vote
          </button>
        </div>
        <div class="card">
          <div class="img-container">
            <img
              src="https://www.ausyflags.com.au/wp-content/uploads/2016/01/awesome-australia-flag-high-resolution-wallpaper-for-desktop-background-downlaod-australia-flag-images-free.jpg"
              alt=""
            />
            <span>Australia</span>
          </div>

          <p>
            Vote count: <span id="au-vote-input">{voteAustralia}</span>
          </p>
          <button id="btn-au-vote" onClick={() => handleCountAu()}>
            Vote
          </button>
        </div>
      </main>
      <button type="reset" id="clearAU" onClick={() => handleClear()}>
        Clear
      </button>
    </div>
  );
}
