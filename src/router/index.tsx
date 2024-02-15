import RootLayout from "pages/RootLayout";
import Benefit from "pages/benefit/Benefit";
import LuckyPrize from "pages/benefit/luckyPrize/LuckyPrize";
import TodayOfMission from "pages/benefit/todayOfMission/TodayOfMission";
import Event from "pages/event/Event";
import Search from "pages/search/Search";
import EventLayout from "pages/event/EventLayout";
import EventDetail from "pages/event/detail/EventDetail";
import EventWrite from "pages/event/write/EventWrite";
import Feed from "pages/feed/Feed";
import Home from "pages/home/Home";
import MyPage from "pages/myPage/MyPage";
import TeamStory from "pages/teamStory/TeamStory";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "event",
        element: <EventLayout />,
        children: [
          { index: true, element: <Event /> },
          { path: "detail", element: <EventDetail /> },
          { path: "write", element: <EventWrite /> },
        ],
      },
      { path: "team-story", element: <TeamStory /> },
      { path: "feed", element: <Feed /> },
      {
        path: "benefit",
        element: <Benefit />,
        children: [
          { path: "lucky-prize", element: <LuckyPrize /> },
          { path: "today-of-mission", element: <TodayOfMission /> },
        ],
      },
      { path: "my-page", element: <MyPage /> },
      { path: "search", element: <Search /> },
    ],
  },
]);
export default router;
