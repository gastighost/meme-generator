import { useState } from "react";
import jokes from "../memesData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImage: "",
  });

  function randomMeme() {
    const randomIndex = Math.floor(Math.random() * jokes.data.memes.length);
    setMeme((prevState) => {
      return {
        ...prevState,
        memeImage: jokes.data.memes[randomIndex].url,
      };
    });
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
      {meme.memeImage && (
        <img src={meme.memeImage} alt="meme" className="meme-image" />
      )}
    </main>
  );
}

export default Meme;
