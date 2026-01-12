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
<<<<<<< HEAD
import { Games } from "./Pages/Games/Games";
=======
import ChildSafety from "./Pages/child-safety/child-safety";
>>>>>>> 3a09f40a5f75279dd38ffdbc3c41bb62cbf6f598

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
<<<<<<< HEAD
      path: "/games",
      element: <Games />,
=======
      path: "/child-safety",
      element: <ChildSafety />,
>>>>>>> 3a09f40a5f75279dd38ffdbc3c41bb62cbf6f598
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;
