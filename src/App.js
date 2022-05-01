import "./App.css";
import Header from "./components/header/header";
import Mint from "./components/mint/mint";
import Video from "./components/video/video";

function App() {
  return (
    <div className="App">
      <Video />
      <Header />
      <Mint />
    </div>
  );
}

export default App;
