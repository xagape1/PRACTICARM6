import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserContext } from '../userContext'
import NotFound from '../NotFound'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import Login from './auth/Login'

function App() {
  // IMPORTAR USUARIOS
  let [usuari, setUsuari] = useState("");
  let [usuariId, setUsuariId] = useState("");
  let [refresh, setRefresh] = useState(false);
  let [ocultar, setOcultar] = useState(false);
  let [fet, setFet] = useState(false)


  return (
    <>
      <UserContext.Provider value={{ usuariId, setUsuariId, refresh, setRefresh, fet, setFet }}>
        {usuariId ?
          <>
            <Header />
            <br></br>
            {ocultar ?
              <>
                <button className="btn btn-primary"
                  onClick={(e) => { setOcultar(!ocultar) }}>Ocultar Afegir</button>
              </>
              :
              <>
                <button className="btn btn-primary"
                  onClick={(e) => { setOcultar(!ocultar) }}>Mostrar Afegir</button>
                <TodosAdd />

              </>
            }
            <TodosList />

          </>

          :
          <Login />}
      </UserContext.Provider>
    </>
  )
}

export default App
