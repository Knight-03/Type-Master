import "./App.css";
import Header from "./components/Header";
import TypeText from "./components/TypeText";
import InputText from "./components/InputText";
import ShowResult from "./components/ShowResult";
import { useSelector } from "react-redux";


function App() {
  const finished = useSelector((state) => state.myReducer.finished)
  return (
    <div>
      {finished && <ShowResult />}
      <Header />
      <TypeText />
      <InputText />
      <p className="tabRestart"><span className="tab">tab</span> - restart test</p>
    </div>
  );
}

export default App;
