import React, { useState } from "react";

const AddTodoForm =({addNewTodo}) => {

    const[addTodo, setAddTodo]=useState('')

    const handleTodo= (e)=>{
        e.preventDefault()
        
        // cette fonction est importé en tant que props de la class Todo.js
        addNewTodo(addTodo)
        setAddTodo('')
    }

    return (
        <form className="mt-4" onSubmit={handleTodo}>
            <div className="card card-body">
                <div className="form-group">
                    <label>Ajouter Todo</label>
                    <input className="form-control" value={addTodo} type="text" onChange={(e)=> setAddTodo(e.target.value)}/>
                    <input className="btn btn-success mt-3" type="Submit"/>
                </div> 
            </div>
        </form>
    )
}

export default AddTodoForm;
