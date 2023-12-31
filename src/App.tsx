import * as React from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import { AboutMe } from "./components/AboutMeContent";
import Resume from "./components/ResumeContent";
import Projects from "./components/ProjectContent";

function App() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div className="App">
      <TopBar selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <BottomBar />
      <div className="content">
        <AboutMe />
        <Resume />
        <Projects />
      </div>
    </div>
  );
}

export default App;
