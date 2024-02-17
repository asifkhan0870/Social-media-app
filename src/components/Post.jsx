import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "../store/post-list-store";

const Post = ({ post }) => {

  const { deletePost } = useContext(PostListData);


  return (
    <div className="card post-container" style={{ width: "28rem" }}>
      <div className="card-body">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MdDelete onClick={()=>deletePost(post.id)}/>
        </span>

        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag.id} className="badge text-bg-primary hashtag">{tag}</span>
        ))}
      </div>
      <div className="alert alert-primary reactions" role="alert">
       {`  ${post.reaction} number of peoples are reacted to your post`}
      </div>
    </div>
  );
};

export default Post;
