import React, { Fragment } from "react";
import useAppContext from "./hooks";
import CreateReaction from "./CreateReaction";
import MessageReaction from "./MessageReactions";

const MessageBoard = () => {
    const { state: { messages, reactionMap } } = useAppContext();

    return (<Fragment>
            {
                messages.map(message => {
                    const {id, username, text, date } = message;
                    return <div key={id}>
                        <h4>{new Date(date).toLocaleDateString()}</h4>
                        <p> {text}</p>
                        <h4>--{username}</h4>
                        <CreateReaction messageId={id}/>
                        <MessageReaction messageReactions={reactionMap[id]} />
                        <hr/>
                    </div>

                })
            }
        </Fragment>
    )

}

export default MessageBoard;
