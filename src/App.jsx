import { ConfigProvider } from "antd";
import Root from "./pages/Root";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Teacher from "./pages/Teacher";
import Classes from "./pages/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/teachers",
        element: <Teacher />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#bc8e5c",
          },
        }}
      >
        <RouterProvider router={router}></RouterProvider>
      </ConfigProvider>
    </div>
  );
};

export default App;
