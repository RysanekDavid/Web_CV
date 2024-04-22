import * as React from "react";
import "./App.css";
import TopBar from "./components/General/TopBar";
import BottomBar from "./components/General/BottomBar";
import { AboutMe } from "./pages/AboutMeContent";
import Resume from "./pages/ResumeContent";
import Projects from "./pages/ProjectContent";
import { useSwipeable } from "react-swipeable";

function App() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setSelectedTab((prev) => (prev < 2 ? prev + 1 : prev)),
    onSwipedRight: () => setSelectedTab((prev) => (prev > 0 ? prev - 1 : prev)),
    trackMouse: false, // Pouze pro touch zařízení
  });

  return (
    <div className="App" {...swipeHandlers}>
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
