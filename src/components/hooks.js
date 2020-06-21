import context from "../context";
import {useContext} from 'react'
const useAppContext = () => {
    return useContext(context);
}
export default useAppContext;
