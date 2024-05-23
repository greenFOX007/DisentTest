import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header/Header";
import { MainContainer } from "./components/MainContainer/MainContainer";

function App() {
  return (
    <div className="layout-container">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
