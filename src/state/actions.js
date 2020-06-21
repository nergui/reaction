import {NEW_MESSAGE, SET_USERNAME} from "./type";
import uuid from 'uuid/dist/v4'

const newMessage = ({text, username}) => (
    {type: NEW_MESSAGE,
  item: {id: uuid(), text, date: Date.now(), username}}
)
export const setUsername = (username) => (
    {type: SET_USERNAME, username}
)
export const createReaction = ({type, emoji, username, messageId}) => ({
   type,
   item: {id: uuid(), date: Date.now(), emoji, username, messageId}
})
export default newMessage;
