import "./App.scss";
import Router from './Router';

function App() {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    return (
    <div className="App" >
      <Router  />
    </div>
  );
}

export default App;
