import PostsFilteredList from "./PostsByQueryList";
import { adoptPosts } from "../utils/misc";

const UsersPosts = ({ userPosts }) => {
  return (
    <>
      <PostsFilteredList posts={adoptPosts} headingText="Adopts" />
    </>
  );
};

export default UsersPosts;
