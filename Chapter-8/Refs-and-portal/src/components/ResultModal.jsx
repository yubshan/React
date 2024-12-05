import { forwardRef, useImperativeHandle, useState } from "react"

 const ResultModal =  forwardRef(  function ResultModal({ targetTime , timeRemaining, onReset} , ref) {
    const userLost = timeRemaining <= 0;
    const formattedRemainingTime = (timeRemaining/1000).toFixed(2);
    const score = Math.round((1-timeRemaining/(targetTime * 1000))*100);
    const dialog = useState();
    useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });
    return(
        <dialog ref={dialog} className="result-modal">
          {userLost && <h2>You Lost</h2> }  
          {!userLost && <h2>You Score : {score}</h2> }  
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the time with <strong>{formattedRemainingTime} seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button >Close</button>
            </form>

        </dialog>

    )
}
)

export default ResultModal;