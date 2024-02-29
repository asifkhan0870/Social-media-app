import { useContext, useState } from "react";

import { PostList as PostListData } from "../store/post-list-store";

import Post from "./Post";
import NoPost from "./NoPost";

const PostList = () => {
  const { currpostList, addInitialPost } = useContext(PostListData);

  const [dataFetched, setdataFetched] = useState(false);

  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPost(data.posts));

      setdataFetched(true);
  }

  const handlegetPostOnClick = () => {
   
  };

  return (
    <>
      {currpostList.length === 0 && (
        <NoPost  />
      )}
      {currpostList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
