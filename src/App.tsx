import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Post from "./components/Post";
import Data from "./components/Data";
import DataAxios from "./components/DataAxios";
import Layout from "./Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Layout>
        <DataAxios />
      </Layout>
      {/* <Data/> */}
    </div>
  );
}

export default App;
