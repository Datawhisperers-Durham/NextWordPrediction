import logo from './logo.svg';
import './App.css';
import { Box, Stack, Paper, List } from '@mui/material';
import { ChatComponent } from './components/chat_component';
import { ChatMessageComponent } from './components/chat_message_component';

function App({ ...props }) {
  let messages = ["test", "test2", "test3"]
  return (
    <Box className="App" sx={{ height: "100%" }}>
      <Stack orientation="column" sx={{ display: "flex", height: "100%" }}>
        <Stack sx={{ flexGrow: 1, height: "100%" }}>
          <ChatComponent messages={messages} />
        </Stack>
        <ChatMessageComponent />
      </Stack>
    </Box>
  );
}

export default App;
