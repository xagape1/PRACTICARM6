import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../userContext';
import { useContext } from 'react';

const Login = ({ setLogin }) => {
  let { usuari, setUsuari } = useContext(UserContext);
  let { usuariId, setUsuariId } = useContext(UserContext);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();

  const sendLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("http://localhost:3004/users/?email=" + email, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "GET"
      });
      const resposta = await data.json();
      console.log(resposta[0])
      if (resposta[0].email == email) {
        if (resposta[0].password == password) {
          setUsuariId(resposta[0].id)
        } else {
          setError("La contraseña es incorrecta")
        }
      }

    } catch (err) {
      console.log(err.message);
      setError("El email no existe");
    };

  };
  return (
    <div className="center">
      <form>
        <div className="form-outline mb-4">
          <input name="email" type="email" id="form2Example1" className="form-control" onChange={(e) => { setEmail(e.target.value); }} />
          <label className="form-label" for="form2Example1">Email address</label>
        </div>

        <div className="form-outline mb-4">

          <input name="password" type="password" id="form2Example2" className="form-control" onChange={(e) => { setPassword(e.target.value); }} />
          <label className="form-label" for="form2Example2">Password</label>
        </div>

        <button type="button" className="btn btn-primary btn-block mb-4" onClick={(e) => {
          sendLogin(e);
        }}>Sign in</button>
        {error ? (<div>{error}</div>) : (<></>)}
      </form>
    </div>
  )
}

export default Login

