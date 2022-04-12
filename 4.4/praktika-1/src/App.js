import ControlledInputsMulti from './components/ControlledInputsMulti'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <header>
        {/* <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">Home</Link>
        </nav> */}
      </header>

      <main>
        <ControlledInputsMulti />
      </main>
    </div>
  );
}

export default App;
