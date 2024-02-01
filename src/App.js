import Weather from "./Weather";

import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="card">
          <header className="App-header">
            <Weather />
          </header>
        </div>
        <p className="text-center">
          <a href="" target="_blank">
            Open-source code
          </a>{" "}
          , by{" "}
          <a href="" target="_blank">
            Vida Mousavi
          </a>{" "}
          hosted by{" "}
          <a href="" target="_blank">
            Netlify
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
