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

  const handleTabChange = (newTab: number, e: any) => {
    const target = e.target as HTMLElement;
    const isSwiperSlide = target.closest(".swiper-slide") !== null;
    if (!isSwiperSlide) {
      setSelectedTab(newTab);
    }
  };
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      handleTabChange(
        selectedTab + 1 < 3 ? selectedTab + 1 : selectedTab,
        event
      ),
    onSwipedRight: () =>
      handleTabChange(selectedTab > 0 ? selectedTab - 1 : selectedTab, event),
    trackMouse: false,
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
