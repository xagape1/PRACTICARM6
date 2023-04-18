import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect,useContext } from 'react';
import { setFilter } from '../slices/todos/todosSlice';
import { useDispatch } from 'react-redux';
import { UserContext } from '../../userContext';
import { useSelector } from 'react-redux';
const TodosMenu = () => {
let { usuariId } = useContext(UserContext);
const { filter } = useSelector((state) => state.todos);

const dispatch= useDispatch();
   const { formState, onInputChange } = useForm({

    filtrar: "",

   });
   const { filtrar } = formState
  return (
    <div className="menu">
       <Link className='click blue' to="/places/add">Afegir Entrada</Link>
       <Link className='click orange' to="/places/grid">Grid</Link>
       <Link className='click gray' to="/places/list">Llista</Link>
       <Link className='click gray' to="/places/marks">Marks</Link>
       
       <input type="text" name="filtrar" placeholder='filtrar por descripcion' onChange={onInputChange}></input>
       <button className="btn btn-primary" onClick={(e) => {dispatch(setFilter({...filter,description:formState.filtrar}))}}>Find</button>
       <button className="btn btn-primary" onClick={(e) => {dispatch(setFilter({description:"",author:usuariId}))}}>Mis sitios</button>
       <button className="btn btn-primary" onClick={(e) => {dispatch(setFilter({description:"",author:""}))}}>Limpiar filtros</button>

       
    </div>
  )
}

export default TodosMenu
