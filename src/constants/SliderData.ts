import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloudIcon from '@mui/icons-material/Cloud';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import TaskIcon from '@mui/icons-material/Task';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

import FarmBot from "../assets/ProjectImages/FarmBot.jpeg";
import MeteoApp from "../assets/ProjectImages/MeteoApp.png";
import ShoppingList from "../assets/ProjectImages/ShoppingList.png";
import TaskManager from "../assets/ProjectImages/TaskManager.png";
import VideoLibrary from "../assets/ProjectImages/VideoLibrary.png";

export const SliderData = [
  {
    icon: SmartToyIcon,
    title: "GameDev FarmBot",
    content: "Application for automation of finding and destroing stones for loot in MMORPG. Built using using Python and OpenCV library.",
    backgroundImage: FarmBot,
  },

  {
    icon: CloudIcon,
    title: "Meteo App",
    content: "Meteo App is a solution for managing weather stations measuring temperature. Built using Typescript+React and IoT Device",
    backgroundImage: MeteoApp,
  },
  {
    icon: ShoppingBasketIcon,
    title: "ShoppingList App",
    content: "App for creating and sharing shopping lists for multiple people. Built using Typescript+React, ExpressJS, MongoDB",
    backgroundImage: ShoppingList,
  },
  {
    icon: TaskIcon,
    title: "TaskManagerPRO",
    content: "Tool for recording errors and problems in software development or project management. Built using Typescript+React, ExpressJS, MongoDB",
    backgroundImage: TaskManager,
  },
  {
    icon: VideoLibraryIcon,
    title: "VideoLibrary App",
    content: "Server for sharing video files. Build using TypeScript+React, NodeJS, SQL",
    backgroundImage: VideoLibrary,
  },
];
