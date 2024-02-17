import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";



function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="appContainer">
        <Sidebar
          selectedTab={selectedTab}
          setselectedTab={setselectedTab}
        ></Sidebar>
        <div className="mainContainer">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
