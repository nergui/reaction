import { NEW_MESSAGE, SET_USERNAME, REACTION_OBJECTS} from './type';

export const initialValue = {messages: [],
    username: 'anonymous',
    reactionMap: {},
}
const REACTION_TYPES = REACTION_OBJECTS.map(m=> m.type);

const reducer = (state, action) => {
    if (REACTION_TYPES.includes(action.type)) {
        let reactionMap;
        const { messageId } = action.item;
        const messageReaction = state.reactionMap[messageId];
        if (messageReaction) {
            reactionMap =  {
                ...state.reactionMap,
                [messageId]: [...messageReaction, action.item]
            }
        }else {
            reactionMap = {
                ...state.reactionMap,
                [messageId]:[action.item]
            }
        }

        return {...state, reactionMap}
    }


    switch (action.type) {
        case NEW_MESSAGE:
            return {...state, messages: [...state.messages, action.item]}
        case SET_USERNAME:
            return {...state, username: action.username}
        default:
            return state;

    }
}

export  default reducer;

