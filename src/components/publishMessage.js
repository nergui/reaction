import newMessage from '../state/actions'
import React, {Fragment, useState} from "react";
import useAppContext from './hooks'

function PublishMessage() {
    const { pubsub: {publish}, state: {username} } = useAppContext();
    const [text, setText] = useState('');

    const textChange = event => {
        setText(event.target.value);
    }
    const publishMessage =()=>{
        publish(newMessage({text, username}));
    }
    const handleKeyPress = fuck => {
        if (fuck.key === 'Enter') {
            publishMessage();
        }
    }
    return (
        <Fragment>
            <h3>Send message? </h3>
            <input  onChange={textChange} onKeyPress={handleKeyPress}/>
            {' '}
            <button onClick={publishMessage}>Send</button>

        </Fragment>
    );

}
export default PublishMessage;
