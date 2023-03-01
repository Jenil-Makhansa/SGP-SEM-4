import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://c0.wallpaperflare.com/preview/71/610/431/advice-article-background-beverage.jpg"
        alt=""
      />
    </div>
  );
}
