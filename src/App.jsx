import Display from "./components/Display";
import Player from "./components/Player";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <Player />
    </div>
  );
};

export default App;
