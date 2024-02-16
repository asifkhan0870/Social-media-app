import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import  "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";


function App() {
  return (
    <div className="appContainer">
      <Sidebar ></Sidebar>
       <div className="mainContainer">
       <Header></Header>
       <CreatePost></CreatePost>
       <Post></Post>
      <Footer></Footer>
       </div>
    </div>
  );
}

export default App;
