import "./assets/styles/app.css";
import { BrowserRouter } from "react-router";
import Navbar from "./containers/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
