import { configureStore} from "@reduxjs/toolkit"
import myReducer from "./Reducers"

export const Store =  configureStore({
    reducer : {
        myReducer : myReducer,
    },
})