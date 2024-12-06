import { useState } from "react"
import Modal from "./Modal";
import { useRef } from "react";

export default function NewTask({onAddTask}){
    const modal = useRef();
    const [enteredTask, setEnteredTask] = useState('');

    function handleNewTask(event) {
        setEnteredTask(event.target.value);  
    }
    function handleClick(event) {
        if(enteredTask.trim() ===''){
            modal.current.open()
            return;
        }
        onAddTask(enteredTask)
        setEnteredTask('')
        
    }
    return (
        <>
        <Modal ref={modal} buttonCaption="Okay" >
        <h2 className="text-xl font-bold text-stone-700 my-4 ">Invalid Input.</h2>
         <p className=" text-stone-600  ">Oops... Seems you forgot to enter a value.</p>
         <p className=" text-stone-600 mb-4 ">Please make sure to enter a valid value.</p>
     </Modal>
        <div className="flex items-center gap-4">
            <input type="text" onChange={handleNewTask} value={enteredTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950 ">Add Task</button>
        </div>
    </>
    )
}