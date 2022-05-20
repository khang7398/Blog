import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?cs=srgb&dl=pexels-pixabay-533923.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
}
