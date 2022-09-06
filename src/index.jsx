import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './styles/index.css';
import App from "./pages/Accueil";
import Detail from "./pages/Detail";
import Error from "./pages/Error"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="detail" element={<Detail />} />
      <Route path="*" element={<Error />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);