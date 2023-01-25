import logo from "./logo.svg";
import "./App.css";
import { EditarUsuario } from "./EditarUsuario";
import { AgregarUsuario } from "./AgregarUsuario";
import { ListaUsuario } from "./ListaUsuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div classNameNameName="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CRUD MERN START
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Agregar">
                  Agregar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuario />}></Route>
          <Route path="/Agregar" element={<AgregarUsuario />}></Route>
          <Route path="/Editar" element={<EditarUsuario />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
