import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProjects({onAdd, onCancel , }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();
    function handleSave() {
        const enteredTitle  = title.current.value;
        const enteredDescription  = description.current.value;
        const enteredDueDate  = dueDate.current.value;
        console.log("Due Date Value:", enteredDueDate);
        if(enteredTitle.trim() ==='' ||  enteredDescription.trim() ==='' || enteredDueDate.trim() ==='' ){
                modal.current.open();
                return;
        }

        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        })
        
    }
    return(
        <>
        <Modal ref={modal} buttonCaption="Okay" >
           <h2 className="text-xl font-bold text-stone-700 my-4 ">Invalid Input.</h2>
            <p className=" text-stone-600  ">Oops... Seems you forgot to enter a value.</p>
            <p className=" text-stone-600 mb-4 ">Please make sure to enter a valid value.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
                <button  onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </menu>
            <div>
               
                <Input type="text" ref={title} lable='Title' isTextarea={false} />
                <Input ref={description} lable='Description' isTextarea={true} />
                <Input type="date" ref={dueDate} lable='Due Date' isTextarea={false} />
            </div>
        </div>
        </>
    )
    
}