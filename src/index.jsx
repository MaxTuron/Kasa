import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './styles/index.css';
import Accueil from "./pages/Accueil";
import Detail from "./pages/Detail";
import Error from "./pages/Error"
import Logement from "./pages/Logement"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="detail" element={<Detail />} />
      <Route path="logement/:logementId" element={<Logement />} />
      <Route path="*" element={<Error />}/>
    </Routes>
  </BrowserRouter>,
);