import * as React from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import { AboutMe, Projects, Resume } from "./components/ContentBar";

function App() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div className="App">
      <TopBar selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <BottomBar />

      <div className="content">
        {selectedTab === 0 && <AboutMe />}
        {selectedTab === 1 && <Resume />}
        {selectedTab === 2 && <Projects />}
      </div>
    </div>
  );
}

export default App;
