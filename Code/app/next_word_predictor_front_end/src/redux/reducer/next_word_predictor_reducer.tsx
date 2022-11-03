import { initialState } from "../../config/initial_state";
import ReducerConstants from "../../config/reducer_constants";

export default function NextWordPredcitorReducer(state = initialState.predict, action: any) {
    let newState: any = state;

    switch (action.type) {
        case ReducerConstants.PREDICTIONS_RECEIVED: {
            newState = { ...state, ...action.payload }
            break;
        }
        case ReducerConstants.USER_SELECTED_PREDICTION: {
            newState = { ...state, predictions: undefined }
            break;
        }
        case ReducerConstants.USER_TYPING_MESSAGE: {
            newState = { ...state, predictions: undefined }
            break;
        }
        default: {
            newState = state;
            break;
        }
    }

    return newState;
}
