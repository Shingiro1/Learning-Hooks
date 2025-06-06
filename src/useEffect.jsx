
import { useState, useEffect } from "react";

function Timer(){
    const [count, setCount] = useState(0); //this is a useState hook to handle the states in our timer.

    useEffect(()=>{    // a useEffect hook to handle effects like timer.
        setTimeout(()=>{  //setting a timeout to count.
            setCount((count) => count + 1); // our setter function to increment our timer.
        },1000) // the time delay of one second.
    },[]);// the brackets make it render once.t
    return(
        <h1>I have rendered {count} times!!</h1> //returning our initial and updated state.
    );

};
export default Timer;

 