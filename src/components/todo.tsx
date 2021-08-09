import { useState } from 'react'
import React from 'react'
import Task from './task'
import Done from './done'

type TaskData = {
    id: number;
    name: string;
}

const Todo = () => {
    const [curT, setcurT] = useState<string>('');
    const [task, setTask] = useState<TaskData[]>([]);
    const [done, setDone] = useState<TaskData[]>([]);
    
    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setcurT(ev.target.value)
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter') addTask(curT)
      }
    
    const reset = () => {
        const reset = curT;
        const resetV = document.querySelector('input');
        if (resetV != null) {
            resetV.value = "";
        }
        setcurT("")
    }

    const addTask = (input: string) => {
        if (input == "") {
            alert("Task cannot be empty");
        }else{
            const newId = (new Date()).getTime()
            const newTasks = [{ id: newId, name: input }, ...task]
            setTask(newTasks)
        }
        reset();
    }

    const deleteTask = (id: number) => {
        const newTasks = task.filter(x => x.id !== id)
        setTask(newTasks)
    }

    const doneTask = (id: number) => {
        const newDone = task
        const tasks = newDone[newDone.findIndex(x => x.id === id)];
        const newId = (new Date()).getTime()
        const newdoneTasks = [{ id: newId, name: tasks.name }, ...done]
        setDone(newdoneTasks)
        const newTasks = task.filter(x => x.id !== id)
        setTask(newTasks)
    }
    return (
        <div className='mx-auto max-w-4xl'>
            <div className='flex space-x-1'>
                <input className='border border-gray-400 w-full text-2xl'
                    onKeyDown={onKeyDownCallback} onChange={onChangeCallback}></input>
                <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(curT)}>+</button>
            </div>

                {task.map(x => <Task id={x.id} name={x.name} doneFn={doneTask} delFn={deleteTask} />)}
            
                {done.map(x => <Done id={x.id} name={x.name} />)}
        </div>
    )

}
export default Todo