import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import LinksPage from "./pages/LinksPage";
import ProfilePage from "./pages/ProfilePage";
import PreviewPage from "./pages/PreviewPage";
import { BrowserRouter as Router } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <section className="app ">
      

        {/* Routes  */}
        <Routes>
          <Route path="/" element={<LinksPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
