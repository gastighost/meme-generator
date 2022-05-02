function Meme() {
  return (
    <main>
      <form className="form">
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
        <button className="form--button">Get a new meme</button>
      </form>
    </main>
  );
}

export default Meme;
