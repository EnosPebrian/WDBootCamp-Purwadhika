import logo from "./logo.svg";
import "./App.css";
import {
  About,
  Header,
  Imgsection,
  Tourdate,
} from "./components/functionComponents";
import "./components/style.css";

function App() {
  return (
    <section>
      <Header></Header>
      <Imgsection></Imgsection>
      <About></About>
      <Tourdate></Tourdate>
    </section>
  );
}

export default App;
