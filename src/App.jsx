import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { OfficeBearers } from "./Pages/OfficeBearers/OfficeBearers";
import { Gallery } from "./Pages/Gallery/Gallery";
import { Contact } from "./Pages/Contact/Contact";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy/PrivacyPolicy";
import ChildSafety from "./Pages/child-safety/child-safety";

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
    // {
    //   path: "/404",
    //   element: <NotFound />,
    // },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "/execom",
      element: <OfficeBearers />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
      path: "/privacy&policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/child-safety",
      element: <ChildSafety />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
