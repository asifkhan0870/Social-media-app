import { useContext } from "react";

import {PostList as PostListData} from "../store/post-list-store"

import Post from './Post';



const PostList=()=>{

   const {currpostList}= useContext(PostListData);

       return <>
            
         {currpostList.map(post=><Post></Post>)}
        
       </>
};

export default PostList;