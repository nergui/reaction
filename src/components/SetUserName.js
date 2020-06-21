import React from "react";
import useAppContext  from './hooks'
import {setUsername} from "../state/actions";

function SetUserName() {
    const { dispatch, state: {username} } = useAppContext();
    const updateUsername = event => (
        dispatch(setUsername(event.target.value))
    )


    return (
        <div>
            <h3>UserName</h3>
            <input onChange={updateUsername} value={username}/>
        </div>
    )
}
export default SetUserName;
