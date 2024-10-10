import { useContext } from "react";
import Results from "./Results";
import SearchPosts from "./SearchPosts";
import { PostContext } from "../App";

export default function Header() {
  // 3.Consuming Context Value
  const { onClearPosts } = useContext(PostContext);

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
