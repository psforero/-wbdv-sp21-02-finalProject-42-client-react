import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home/home-page"

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Route path="/">
                  <Home/>
              </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
