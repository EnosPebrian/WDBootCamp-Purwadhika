import logo from "./logo.svg";
import "./App.css";
import "./components/style.css";
import Heading1 from "./components/functionCom";
import HeadingClass from "./components/ClassCom";

function App() {
  let name = "enos";
  return (
    <nav>
      <div style={{ textAlign: `center`, width: `100vh` }}>
        <Heading1 name={name}>
          <h1>
            hehe
            <h2>h2h2</h2>
          </h1>
        </Heading1>
        <HeadingClass />
        <h1>Tadaaaaaaaaaaa</h1>
        <h2 className="red">My name is {name}</h2>
        <h3>{name == "Enos" ? name : "bukan Enos"}</h3>
      </div>
    </nav>
  );
}

export default App;
