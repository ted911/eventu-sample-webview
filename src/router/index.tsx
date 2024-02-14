import { createBrowserRouter } from "react-router-dom";
import RootLayout from "src/app/RootLayout";
import Benefit from "src/app/benefit/Benefit";
import LuckyPrize from "src/app/benefit/luckyPrize/LuckyPrize";
import TodayOfMission from "src/app/benefit/todayOfMission/TodayOfMission";
import EventLayout from "src/app/event/EventLayout";
import EventDetail from "src/app/event/detail/EventDetail";
import EventWrite from "src/app/event/write/EventWrite";
import Feed from "src/app/feed/Feed";
import Home from "src/app/home/Home";
import TeamStory from "src/app/teamStory/TeamStory";
import Event from "src/app/event/Event";
import Mypage from "src/app/myPage/MyPage";
import Search from "src/app/search/Search";

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
      { path: "my-page", element: <Mypage /> },
      { path: "search", element: <Search /> },
    ],
  },
]);
export default router;
