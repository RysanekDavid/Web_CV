import * as React from "react";
import "./App.css";
import TopBar from "./components/General/TopBar";
import BottomBar from "./components/General/BottomBar";
import { AboutMe } from "./pages/AboutMeContent";
import Resume from "./pages/ResumeContent";
import Projects from "./pages/ProjectContent";

type SectionKey = "aboutMe" | "resume" | "projects";

function App() {
  const sectionsRef = React.useRef<{
    [key in SectionKey]: React.RefObject<HTMLDivElement>;
  }>({
    aboutMe: React.createRef<HTMLDivElement>(),
    resume: React.createRef<HTMLDivElement>(),
    projects: React.createRef<HTMLDivElement>(),
  });

  // State to keep track of the selected tab
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleScrollToSection = (sectionKey: SectionKey) => {
    const sectionIndex = { aboutMe: 0, resume: 1, projects: 2 }[sectionKey];
    setSelectedTab(sectionIndex); // Update the selected tab based on sectionKey
    sectionsRef.current[sectionKey]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <TopBar selectedTab={selectedTab} onTabSelect={handleScrollToSection} />
      <div className="content">
        <div ref={sectionsRef.current.aboutMe}>
          <AboutMe onScrollToSection={handleScrollToSection} />
        </div>
        <div ref={sectionsRef.current.resume}>
          <Resume />
        </div>
        <div ref={sectionsRef.current.projects}>
          <Projects />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
