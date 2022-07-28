import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 MOVIE LIST HUB 🎞
    </span>
  );
};

export default Header;
