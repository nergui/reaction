import React from "react";
import { REACTION_OBJECTS } from "../state/type";
import useAppContext from "./hooks";
import {createReaction} from "../state/actions";



function CreateReaction({messageId}) {

    const {pubsub: {publish}, state: {username} } = useAppContext();

    const publishAction = ({type, emoji }) => {
        publish(createReaction({type, emoji, username, messageId}))
    }

    return (
        <div className='CreateReaction'>
            {
                REACTION_OBJECTS.map(obj =>{
                    const {type, emoji} = obj;
                    return (
                        <span key={type} onClick={()=>publishAction({type, emoji})} >{emoji}</span>
                    )
                })
            }
        </div>
    )
}
export default CreateReaction;
