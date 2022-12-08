import SelectInput from "@mui/material/Select/SelectInput"
import ReducerConstants from "src/config/reducer_constants"

function predictTheWords(message: string, dispatcher) {
    if (message != undefined && message.split(" ").length > 2) {
        dispatcher({
            type: ReducerConstants.PREDICTIONS_RECEIVED,
            payload: {
                predictions_state: "loading",
                system_message: undefined
            }
        })
        fetch("http://127.0.0.1:5060/api/v1/get_prediction?user_input=" + message, {
            headers: {
                'Accept': '*/*',
                'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
                'Access-Control-Allow-Headers': 'http://127.0.0.1:3000',
                'Access-Control-Allow-Methods': 'http://127.0.0.1:3000',
            },
            mode: 'cors',
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.status == 200) {
                        dispatcher({
                            type: ReducerConstants.PREDICTIONS_RECEIVED,
                            payload: {
                                predictions: result.data,
                                predictions_state: "loaded",
                                system_message: undefined
                            }
                        })
                    } else {
                        dispatcher({
                            type: ReducerConstants.PREDICTIONS_ERROR,
                            payload: {
                                predictions_error: result.data,
                                predictions_state: "loaded",
                                system_message: "Error received while fetching prediction: \n" + result.data
                            }
                        })
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    dispatcher({
                        type: ReducerConstants.PREDICTIONS_ERROR,
                        payload: {
                            predictions_error: error,
                            predictions_state: "loaded",
                            system_message: "Error received while fetching prediction: \n" + error
                        }
                    })
                }
            )
    } else {
        dispatcher({
            type: ReducerConstants.PREDICTIONS_RECEIVED,
            payload: {
                predictions_error: undefined,
                predictions: undefined,
                predictions_state: "loaded"
            }
        })
    }
}

function handleUserNextPredictionSelection(user_input: string, selected_prediction: string, dispatcher) {
    dispatcher({
        type: ReducerConstants.PREDICTIONS_RECEIVED,
        payload: {
            predictions_state: "loading"
        }
    })

    const data = new FormData();
    data.append("user_input", user_input)
    data.append("predicted_word", selected_prediction)

    fetch("http://localhost:5060/api/v1/save_user_selection", {
        headers: {
            'Accept': '*/*',
            'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
            'Access-Control-Allow-Headers': 'http://127.0.0.1:3000',
            'Access-Control-Allow-Methods': 'http://127.0.0.1:3000',
        },
        mode: 'cors',
        method: 'POST',
        body: data,
    })
        .then(res => res.json())
        .then(
            (result) => {
                if (result.status == 200) {
                    dispatcher({
                        type: ReducerConstants.PREDICTIONS_RECEIVED,
                        payload: {
                            predictions: undefined,
                            predictions_state: "loaded",
                            chat_box_input: "",
                            system_message: "Prediction saved!"
                        }
                    })
                } else {
                    dispatcher({
                        type: ReducerConstants.PREDICTIONS_ERROR,
                        payload: {
                            predictions_error: undefined,
                            predictions_state: "loaded",
                            chat_box_input: "",
                            system_message: "Error received while saving prediction: \n" + result.data
                        }
                    })
                }
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                dispatcher({
                    type: ReducerConstants.PREDICTIONS_ERROR,
                    payload: {
                        predictions_error: undefined,
                        predictions_state: "loaded",
                        chat_box_input: "",
                        system_message: "Error received while saving prediction: \n" + error
                    }
                })
            }
        )
}

function handleUserTyping(message, dispatcher) {
    dispatcher({
        type: ReducerConstants.USER_TYPING_MESSAGE,
        payload: {
            chat_box_input: message
        }
    })
}

export { predictTheWords, handleUserNextPredictionSelection, handleUserTyping }