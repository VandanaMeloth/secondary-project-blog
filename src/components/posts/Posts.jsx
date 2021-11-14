import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="./Assets/creamdory.jpg" />
      <Post img="./Assets/pepperchicken.png" />
      <Post img="./Assets/prawns.png" />
      <Post img="./Assets/pizza.png" />
    </div>
  );
}
