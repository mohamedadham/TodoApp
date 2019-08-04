import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const styles={
    textDecoration:'line-through',
    
}
const italic={
    fontStyle:'italic'
}

function TodoItem(props){
   console.log(props.item.completed)
    
    return(
        <div className="todo-list">
        
            
            <p className="todo-text" style={{textDecoration:props.item.completed?'line-through':null, fontStyle:props.item.italic?'italic':null}}> {props.item.text}</p>
        
        <div className="option">
            <input   style={{marginRight:'0vmin'}} type="checkbox" checked={props.item.completed}  onChange={ ()=>props.handleCheckbox(props.item.id)}/> 
            <FontAwesomeIcon style={{color:'black'}} icon={faStar} onClick={()=>props.italic(props.item.id)}/>
            <FontAwesomeIcon style={{color:'black'}} icon={faTrashAlt} onClick={()=>props.delete(props.item.id)}/>
          
        
       </div>
        </div>
    
    )
    
    
}


export default TodoItem