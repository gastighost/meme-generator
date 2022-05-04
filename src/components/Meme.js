import { useState, useEffect } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "Bring me",
    bottomText: "Fooood",
    memeImage: "",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function randomMeme() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    setMeme((prevState) => {
      return {
        ...prevState,
        memeImage: allMemes[randomIndex].url,
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
