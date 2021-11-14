import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="./Assets/p.jpg"
          alt=""
        />
        <p>
          This blog is for anyone who loves to cook and for everyone who doesn’t.
          Eating real food was really fun. And gaining confidence as a home chef? That was life changing!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Food Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              South Indian
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              North Indian
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Chineese
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Continental
            </Link>
          </li>
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-twitter-square" onClick="https://www.instagram.com/invites/contact/?i=1qou0mu5rll7b&utm_content=49at8gy"></i>
        </div>
      </div>
    </div>
  );
}
