import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function Component1(){

    const [user, setUser] = userState('Memi');

    return(
        <>
            <UserContext.provider value={user}>
                <h1>{`Hello ${user}`}</h1>
                <Component2 />
            </UserContext.provider>
        </>
    );

};
function Component2(){
        return(
            <>
                <h1>This is Component2</h1>
                <Component3 />
            </>
        )
};

function Component3(){
    return(
        <>
            <h1>This is Component3</h1>
            < Component4 />
        </>
    )
};
function Component4(){
    const user = useContext(UserContext);
    return(
        <>
            <>This is Component 5</>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
};
export default Component1;