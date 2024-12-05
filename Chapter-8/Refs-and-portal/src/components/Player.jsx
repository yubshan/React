import { useRef, useState } from "react";

export default function Player({}) {
  const playerName = useRef()
  const [enterPlayerName , setEnterPlayerName]=useState(null);


  function handleName() {
    
    setEnterPlayerName( playerName.current.value);
    
  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text"  ref={playerName}/>
        <button  onClick={handleName}> Set Name</button>
      </p>
    </section>
  );
}
