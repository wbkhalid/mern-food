import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
      </div>
    </div>
  );
};

export default App;
