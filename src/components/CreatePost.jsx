import {  useContext, useRef } from "react";
import { PostList as PostListData } from "../store/post-list-store";

const CreatePost = () => {

  const { addPost } = useContext(PostListData);

  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const PostbodyElement = useRef();
  const PostReactionsElement = useRef();
  const PostTagsElement = useRef();

  const SubmitHandler=(event)=>{

          event.preventDefault();
         
           const userId=userIdElement.current.value;
           const PostTitle=PostTitleElement.current.value;
           const Postbody=PostReactionsElement.current.value;
           const postReactions=PostReactionsElement.current.value;
           const PostTags=PostTagsElement.current.value.split(' ');
           userIdElement.current.value="";
           PostTitleElement.current.value="";
           PostReactionsElement.current.value="";
           PostReactionsElement.current.value="";
           PostTagsElement.current.value="";


      addPost(userId,PostTitle,Postbody,postReactions,PostTags);

  }

  return (
    <form className="create-post" onSubmit={SubmitHandler}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          ref={userIdElement}
          type="text"
          placeholder="Enter your Id "
          className="form-control"
          id="userId"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={PostTitleElement}
          placeholder="Enter your title here "
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Your's Post Content
        </label>
        <textarea
          ref={PostbodyElement}
          placeholder="Enter your's post content here"
          rows={2}
          type="text"
          className="form-control"
          id="body"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reactors
        </label>
        <input
          ref={PostReactionsElement}
          placeholder="Enter expacted reactors to this post"
          type="text"
          className="form-control"
          id="reaction"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtags
        </label>
        <input
          ref={PostTagsElement}
          placeholder="Enter your tags here"
          type="text"
          className="form-control"
          id="tags"
          aria-describedby="emailHelp"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
