import React from 'react';

import { Button, } from 'reactstrap'
import './Body.css'

const Body = (props) => {

    const toDoList = props.toDo.map((toDo, key) => 
        {
            return (
                <div key={toDo.id}>
                    <p>{toDo.description}
                        <Button color="danger" className="space-between-delete" 
                            onClick={() => props.deleteTodo(toDo.id)}>X</Button>
                    </p>
                </div>
            )
        }
        
    )

    return (
        <div className="space-between-element">
            {toDoList}
        </div>
    );
};


export default Body;