import { combineReducers } from "redux";
import reduceReducers from "reduce-reducers";
import { createRouterReducer } from '@lagunovsky/redux-react-router';
import NextWordPredcitorReducer from "../redux/reducer/next_word_predictor_reducer";
import UserReducer from "../redux/reducer/user_reducer";

const rootReducer = (history: any) => combineReducers({
    router: createRouterReducer(history),
    appData: reduceReducers(combineReducers({
        nextWordPredcitorReducer: NextWordPredcitorReducer,
        userReducer: UserReducer,
    }))
});

export default rootReducer;
