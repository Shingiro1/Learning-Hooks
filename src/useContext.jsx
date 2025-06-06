
import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function Component1(){
    const [user, setUser] = useState('Memmi');
    return(
        <> 
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            < Component2/>
            
        </ UserContext.Provider>
        </>
    )
}
function Component2(){
    return(
        <>
        <UserContext.Provider>
            <h2>This cmpnt 2</h2>
            <Component3 />
        </UserContext.Provider>
        </>
    )
}
function Component3(){
    return(
        <>
        <UserContext.Provider>
            <h2>This cmpnt 3</h2>
            <Component4/>
        </UserContext.Provider>
        </>
    )
}
function Component4(){
    const user = useContext(UserContext);
    return(
        <>
            <h1>Component4</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
        
    )
}
export default Component1;