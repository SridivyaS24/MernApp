import React from "react"
import axios from "axios"

function CreateTodo(){
    const handleAdd=()=>{
        const[todo,setTodo]=useState()
        const handleAdd=()=>{
         axios.post('http://localhost:3001/add',{todo:todo})
         .then(result=>{
            location.reload()
         })
         .catch(err=>console.log(err))
        }
    }
    return(
    <div className="create-form">
        <input type="text" placeholder="Enter Todo" onChange={(e)=>setTodo(e.target.value)}/>
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
)
}

export default CreateTodo