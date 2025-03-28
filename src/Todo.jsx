import react from'react'
import {useEffect,useState} from "react";
const Todo = () => {
    const[todo,setTodo]=useState([])
    const [newtasks, setNewtasks] = useState("");
    useEffect(() => {
        const tasks = localStorage.getItem("tasks");
        if (tasks) {
            setTodo(JSON.parse(tasks));
        }
    },[]);

    useEffect(() =>{
        localStorage.getItem("tasks", JSON.stringify(todo));
    },[todo]);

    return (
        <div style={{
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4j9ho6dYVUfGAlc21menOeJCgS6eOPuLUrg&s")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
           height: '90vh',
          width:'80vh'
            // Full height of the viewport
          }}>Todo
        <div>
        <h1>Todo list</h1>
        <input type="text"placeholder="enter the task"value={newtasks}onChange={(e) => setNewtasks(e.target.value)}/>
        <button
        disabled={!newtasks} 
        onClick={() =>{
            setTodo([
                ...todo,
                {
                    task: newtasks,
                    completed: false,

                },
            ]);
            setNewtasks("");
        }
        }>add</button>
        </div>
        </div>
    );
};
export default Todo;

