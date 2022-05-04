import { useState } from "react";
import jokes from "../memesData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "Bring me",
    bottomText: "Fooood",
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

  function onChangeHandler(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
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
          name="topText"
          onChange={onChangeHandler}
          value={meme.topText}
        ></input>
        <input
          placeholder="Bottom text"
          className="form--input"
          type="text"
          name="bottomText"
          onChange={onChangeHandler}
          value={meme.bottomText}
        ></input>
        <button onClick={randomMeme} className="form--button">
          Get a new meme
        </button>
      </div>
      {meme.memeImage && (
        <div className="meme">
          <img src={meme.memeImage} alt="meme" className="meme-image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      )}
    </main>
  );
}

export default Meme;
