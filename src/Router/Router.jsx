import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import UpdateJob from "../Pages/UpdateJob";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/post-job",
        element: <CreateJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/salary",
        element: <ErrorPage />,
      },
      {
        path: "/secret-page",
        element: <About />,
      },
      {
        path: "edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(
            `https://job-search-server-ten.vercel.app/all-jobs/${params.id}`
          ),
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
]);

export default router;
