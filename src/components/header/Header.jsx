import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm" ></span>
        <span className="headerTitleLg">Food Blogs</span>
      </div>
      <img
        className="headerImg"
        src="./Assets/background.png"
        alt=""
      />
    </div>
  );
}
