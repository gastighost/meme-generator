import { useState } from "react";
import jokes from "../memesData";

function Meme() {
  const [memeImage, setMemeImage] = useState();

  function randomMeme() {
    const randomIndex = Math.floor(Math.random() * jokes.data.memes.length);
    setMemeImage(jokes.data.memes[randomIndex].url);
  }

  return (
    <main>
      <div className="form">
        <input
          placeholder="Top text"
          className="form--input"
          type="text"
        ></input>
        <input
          placeholder="Bottom text"
          className="form--input"
          type="text"
        ></input>
        <button onClick={randomMeme} className="form--button">
          Get a new meme
        </button>
      </div>
      {memeImage && <img src={memeImage} alt="meme" className="meme-image" />}
    </main>
  );
}

export default Meme;
