import React from 'react';
import './App.css';
import TodoItem from './Todolist.js'
    
class App extends React.Component {
    
    state={
        todoText:'',
        completed:false,
        todoData:[],
        id:0
    }
    
    handleSubmit=(e)=>{
       e.preventDefault();
        
      const{todoText,todoData,id}=this.state
      this.setState({id:this.state.id+1})
        todoData.push({text:todoText,completed:false,id:this.state.id})
        this.setState({todoData:todoData})
        
    }
    
    
    handleCheckbox=(id)=>{
       
      
        
  
       this.setState(prevState=>{
            const updatedTodos=prevState.todoData.map(todo=>{
                if(todo.id===id){
                todo.completed=!todo.completed
                }
                    return todo
            })
          return {
                todoData: updatedTodos
            }
            
        }) 
          
    }
    
    handleChange=(e)=>{
         const{name,value}=e.target;
        this.setState({[name]:value}  )
        
    }
    
    render(){
      const{todoText,completed,todoData,id}=this.state;
        
        return (
            <div className="App">
            
            <header>
                <h2>TodoList</h2>
            
            </header>
            <form  onSubmit={this.handleSubmit}>
                <input style={{minWidth:'40vmin',minHeight:'48px',fontSize:'20px'}} type="text"  value={this.state.todoText} name="todoText" onChange={this.handleChange}/> 
                <button>  Add</button>
            </form>
             <div className="todo-items">
           { todoData.map(item=><TodoItem item={item} handleCheckbox={this.handleCheckbox} key={item.id}/>) }
            
            </div>
            </div>
          );
        
    }
  
}

export default App;
