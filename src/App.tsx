import * as React from "react";
import "./App.css";
import TopBar from "./components/General/TopBar";
import BottomBar from "./components/General/BottomBar";
import { AboutMe } from "./pages/AboutMeContent";
import Resume from "./pages/ResumeContent";
import Projects from "./pages/ProjectContent";

function App() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div className="App">
      <TopBar selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <BottomBar />
      <div className="content">
        {selectedTab === 0 && <AboutMe visible={selectedTab === 0} />}
        {selectedTab === 1 && <Resume />}
        {selectedTab === 2 && <Projects />}
      </div>
    </div>
  );
}

export default App;
