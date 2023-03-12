import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Login from "../pages/login/index";
import Home from "../pages/Home/index";

export function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
