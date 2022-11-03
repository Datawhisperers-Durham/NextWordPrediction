import { initialState } from "../../config/initial_state";
import ReducerConstants from "../../config/reducer_constants";

export default function UserReducer(state = initialState.app, action: any) {
    let newState: any = state;

    switch (action.type) {
        case ReducerConstants.USER_CHANGED: {
            newState = { ...state, ...action.payload }
            break;
        }
        default: {
            newState = state;
            break;
        }
    }

    return newState;
}
