function Header() {
  return (
    <header className="header">
      <img
        className="header--image"
        src={require("../images/troll-face.png")}
        alt="troll face"
      />
      <h2 className="header--title">Header Component</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}

export default Header;
