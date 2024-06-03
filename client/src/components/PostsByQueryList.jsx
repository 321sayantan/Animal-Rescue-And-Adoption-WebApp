import { useState, useEffect } from "react";
import axios from "axios";

const PostsComponent = ({ searchTerm }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from your database
    axios
      .get(`/api/posts?search=${searchTerm}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [searchTerm]);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
