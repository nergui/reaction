import React, {useEffect, useReducer} from 'react';
import reducer, {initialValue} from "../state/reducer";
import context from "../context";
import PublishMessage from './publishMessage'
import MessageBoard from './MessageBoard'
import PubNub from '../pubnub'
import SetUserName from "./SetUserName";

const pubsub = new PubNub();

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue)
  console.log('state', state)

    useEffect(() => {
        pubsub.addListener({
            message: messageObject => {
                const { channel, message } = messageObject;

                console.log('Received message', message, 'channel', channel);

                dispatch(message);
            }
        });
    }, []);

  return (
      <context.Provider value={{state, dispatch, pubsub}}>

          <h2>Reaction</h2>
          <SetUserName/>
          <hr/>
          <PublishMessage />
          <hr/>
          <MessageBoard />
      </context.Provider>
  );
}

export default App;
