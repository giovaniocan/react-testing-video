import { useState } from "react";
import axios from 'axios'
import Button from "./button";

interface TaskProps{
    id: string
    title: string
}

export function Task(){
    const [tasks, setTasks] = useState<TaskProps[]>([])

    async function handleClick(){
        const {data} =await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    
        setTasks(data)
    }

    return(
       <div>
            <h1>Tasks from API</h1>
            <Button
                onClick={handleClick}
                disabled={false}
            >Get Tasks from api
            </Button>

            {tasks.map((task) => <p key={task.id} >{task.title}</p>)}
       </div>
    )
}