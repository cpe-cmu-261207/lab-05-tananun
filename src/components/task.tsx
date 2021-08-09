import { useState } from 'react'

type taskprops = {
    id : number;
    name : string;
    doneFn : Function;
    delFn : Function;
}

const Task = ({id,name,doneFn,delFn}: taskprops) => {
   const [Mouse,setMouse] = useState<boolean>(false);
   return(<div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}>
       <span className="text-2xl"> {name}</span>
            <div className="flex space-x-1 items-center" style={(Mouse) ? { visibility: "visible" } : { visibility: "hidden" }}>
                <button className="bg-green-400 w-24 text-2xl" onClick={() => doneFn(id)} >Done</button>
                <button className="bg-red-400 w-24 text-2xl" onClick={() => delFn(id)}>Delete</button>
            </div>
   </div>
   )
   
}

export default Task