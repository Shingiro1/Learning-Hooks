import { useEffect, useState, useRef } from "react";

function MyUseRef(){
    const [inputValue, setInputValue] = useState(''); // using useState to initialize the states.
    const count = useRef(0); // use useRef to generate initial count in a way that it doesn't re-render.

    useEffect(()=>{
        count.current = count.current + 1;
    }); // using useEffect to update the state.
    return(
        <>
             <input
             type="text"
             value={inputValue}
             onChange={(e)=>setInputValue(e.target.value)}
             />
             <h1>Render: {count.current}</h1>
        </>
    )
}

export default MyUseRef;