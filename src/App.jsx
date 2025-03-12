import "./assets/styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ButtonPage from "./pages/buttons/ButtonPage";
import TextPage from "./pages/texts/TextPage";
import Navbar from "./containers/Navbar";
import LinkPage from "./pages/links/LinkPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ButtonPage />} />
        <Route path="/links" element={<LinkPage />} />
        <Route path="/texts" element={<TextPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
