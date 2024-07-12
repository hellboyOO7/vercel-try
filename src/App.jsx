import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import CardList from "./components/CardList";
import { PostListProvider } from "./store/post-list-store";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState(false);
  const handleOnClick = () => {
    setSelectedTab(!selectedTab);
  };

  return (
    <PostListProvider>
      <div className="main-container">
        <Sidebar handleOnClick={handleOnClick} selectedTab={selectedTab} />
        <div className="body-container">
          <Header />
          <div className="main-body-container">
            {selectedTab ? <CreatePost /> : <CardList />}
          </div>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
