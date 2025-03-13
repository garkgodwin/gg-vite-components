import "./assets/styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ButtonPage from "./pages/buttons/ButtonPage";
import TextPage from "./pages/texts/TextPage";
import Navbar from "./containers/Navbar";
import LinkPage from "./pages/links/LinkPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ButtonPage />} />
        <Route path="/links" element={<LinkPage />} />
        <Route path="/texts" element={<TextPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
