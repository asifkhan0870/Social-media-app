import { useContext, useEffect, useState } from "react";

import { PostList as PostListData } from "../store/post-list-store";

import Post from "./Post";
import NoPost from "./NoPost";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { currpostList, addInitialPost } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {

    const controller=new AbortController();
    const signal=controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });

      return ()=>{
        // console.log("Cleaning up useEffects......");

        controller.abort();

      }
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && currpostList.length === 0 && <NoPost />}
      {!fetching &&
        currpostList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default PostList;
