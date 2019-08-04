import React from 'react' 

const styles={
    textDecoration:'line-through',
    
}

function TodoItem(props){
   
    
    return(
        <div className="todo-list">
        
            
            <p className="todo-text" style={props.item.completed? styles:null}> {props.item.text}</p>
            <input   style={{marginRight:'0vmin',width:'10%'}} type="checkbox" checked={props.item.completed}  onChange={ ()=>props.handleCheckbox(props.item.id)}/> 
        
       
        </div>
    
    )
    
    
}


export default TodoItem