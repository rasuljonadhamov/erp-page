import { ConfigProvider } from "antd";
import Root from "./pages/Root";

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
        <Root />
      </ConfigProvider>
    </div>
  );
};

export default App;
