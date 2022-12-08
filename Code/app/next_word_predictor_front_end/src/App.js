import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { Box, Stack, Paper, List, Typography, CircularProgress } from '@mui/material';
import { ChatComponent } from './components/chat_component';
import { ChatMessageComponent } from './components/chat_message_component';
import Toolbar from "@mui/material/Toolbar";
import PredictionsComponent from './components/PredictionsComponent';
import * as appActions from './redux/action/next_prediction_action';

function App({ ...props }) {
  const onPredictMessage = (message) => {
    props.onPredictMessage(message)
  }

  const onPredictionClick = (prediction) => {
    props.saveUserPredictionSelection(props.predictions.user_input, prediction)
  }

  const handleUserTyping = (typeing) => {
    props.handleUserTyping(typeing)
  }

  return (
    <Box sx={{ p: 0, m: 0, width: "100%" }} component="main" >
      <Toolbar />
      {
        props.predictions_state == "loading" ?
          <CircularProgress />
          :
          props?.predictions?.prediction_output?.split(",")?.length > 0 ?
            <Box sx={{ pb: 1, justifyContent: "center", alignItems: "center", display: 'flex', flexDirection: 'column', width: "100%", height: "70%" }}>
              <Typography>Next word recommendations are:</Typography>
              <PredictionsComponent predictions={props.predictions} onPredictionClick={onPredictionClick} />
            </Box> :
            <Box />
      }

      {
        props?.system_message != undefined ?
          <Box sx={{ pb: 1, justifyContent: "center", alignItems: "center", display: 'flex', flexDirection: 'column', width: "100%", height: "70%" }}>

            <Typography>Message:</Typography>
            <Typography>{props?.system_message}</Typography>
          </Box>
          :
          <Box></Box>
      }

      <Paper sx={{ m: 0, p: 2, position: 'fixed', bottom: 0, left: 0, right: 0, pl: 3, pb: 3 }}>
        <ChatMessageComponent predictFor={(message) => onPredictMessage(message)} message={props.chat_box_input} onTyping={handleUserTyping} />
      </Paper>
    </Box>
  );
}



function mapStateToProps(state) {
  return {
    predictions_state: state?.appData?.nextWordPredcitorReducer?.predictions_state,
    predictions: state?.appData?.nextWordPredcitorReducer?.predictions,
    messages: state?.appData?.nextWordPredcitorReducer?.messages,
    chat_box_input: state?.appData?.nextWordPredcitorReducer?.chat_box_input,
    system_message: state?.appData?.nextWordPredcitorReducer?.system_message,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleUserTyping: (message) => appActions.handleUserTyping(message, dispatch),
    onPredictMessage: (message) => appActions.predictTheWords(message, dispatch),
    saveUserPredictionSelection: (user_input, selected_prediction) => appActions.handleUserNextPredictionSelection(user_input, selected_prediction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
