import { createContext, useReducer } from "react";



/* here is context api export with the name of PostList having three object one is list which tells number of list present at this time and it will be used by PostList component second is
method which is add post which is used by component CreatePost.jsx and third is deletePost it is use by PostList forwarded by Post to delete created post
*/


const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);


/*  default post list store default value of lists one of argumanet of useReducer is default list here i am storing...... */ 


const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Mumbai",
    body: "Hi, there I am going to Mumbai",
    reaction: 2,
    userId: "user-1",
    tags: ["vacation", "Mumbai", "chaupati"],
  },
  {
    id: 2,
    title: "Pass first division in B.tech",
    body: "Hi,I am very happy that i have passed in B.tech unbelievable ",
    reaction: 10,
    userId: "user-2",
    tags: ["B.tech", "Graduate", "Tough", "Pass", "CPI"],
  },
  {
    id: 3,
    title: "Reading books",
    body: "Assalam Walaikum , I am reciting Quran majeed on daily basis Alhamdulillah!!!",
    reaction: 100,
    userId: "user-3",
    tags: ["Quran", "Islam", "Masha Allah"],
  },
];


// this is second argumnet of useReducer which is a method 

const postListReducer = (currPostList, action) => {
      
      let newPostList=currPostList;

      if(action.type==='DELETE_POST'){
           
        newPostList=currPostList.filter(post=>post.id!==action.payload.Postid);
      }

      return newPostList;
};




const PostListProvider = ({ children }) => {


  const [currpostList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId,PostTitle,Postbody,postReactions,PostTags) => {
    

    console.log(`${userId}  ${PostTitle}  ${Postbody}  ${postReactions}  ${PostTags}  `);
    

  };

  const deletePost = (Postid) => {
    
    // console.log(`deleted post with id: ${Postid}`);
    dispatchPostList({
      type:'DELETE_POST',
      payload:{
        Postid
      }
    })

  };

  return (
    <PostList.Provider
      value={{
        currpostList: currpostList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
