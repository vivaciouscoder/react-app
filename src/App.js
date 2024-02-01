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
          <a href="https://github.com/vivaciouscoder/react-app" target="_blank">
            Open-source code
          </a>{" "}
          , by Viv Mousavi hosted by{" "}
          <a href="https://app.netlify.com/" target="_blank">
            Netlify
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
