import React, { useState } from "react";
import {v1 as uuid} from 'uuid';
import AddTodoForm from './AddTodoForm';

const Todo = () => {

   const [todos, setTodos] = useState([
        {id:1, todo: 'Acheter du lait'},
        {id:2, todo: 'Acheter du pain'},
    ])

    const [warning,setWarning] = useState(false)

    //cette fonction parcours le tableau des todos pour les mettre chaque élément dans une liste 
    const myTodos = todos.map(elem=>{
        return (
        <li className="list-group-item" key={elem.id}>{elem.todo}</li>
        )
    })

    // cette fonction doit être passé  en props du composant pour qu'elle puisse lui transmettre de la data
    
    const addNewTodo = (newTodo) => {

        if(newTodo!==''){
            warning && setWarning(false);
            setTodos([...todos, {
                id: uuid(), 
                todo: newTodo
            }])
        }else{
            setWarning(true)
        }

    }

    const warningMSG = warning && <div className="alert alert-danger mt-5" role="alert">Veillez saisir un todo s'il vous plaît</div>
    
    return (
        <div>
            {warningMSG}
            <h1 className="text-center">{todos.length} To-Do</h1>
            <ul className="list-group">
                {myTodos}
            </ul> 
            <AddTodoForm addNewTodo={addNewTodo}/>
        </div>
    )
}

export default Todo;
