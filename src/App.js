import "./styles.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}
