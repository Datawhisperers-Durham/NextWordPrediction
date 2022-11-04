import logo from './logo.svg';
import './App.css';
import { Box, Stack, Paper, List } from '@mui/material';
import { ChatComponent } from './components/chat_component';
import { ChatMessageComponent } from './components/chat_message_component';
import Toolbar from "@mui/material/Toolbar";
import PredictionsComponent from './components/PredictionsComponent';

function App({ ...props }) {
  let messages = ["test", "test2", "test3", "test", "test2", "test3", "test", "test2", "test3", "test", "test2", "test3"]
  return (
    <Box sx={{ p: 0, m: 0 }} component="main" >
      <Toolbar />
      <Box sx={{ pb: '8em' }}>
        <ChatComponent messages={messages} />
      </Box>
      <Paper sx={{ m: 0, p: 2, position: 'fixed', bottom: 0, left: 0, right: 0, pl: 3, pb: 3 }}>
        <Box sx={{ pb: 1 }}>
          <PredictionsComponent />
        </Box>
        <ChatMessageComponent />
      </Paper>
    </Box>
  );
}

export default App;
