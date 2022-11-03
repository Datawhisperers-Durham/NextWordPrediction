import { Component } from "react";
import { Box, Stack, Paper, List, Typography } from '@mui/material';
import React from "react";
import { ChatBubbleLeft, ChatBubbleRight } from './chat_bubble_component';

type ChatProps = {
    messages: [string]
}

class ChatComponent extends Component<ChatProps> {
    render() {
        return (
            <List>
                {
                    this.props.messages.map(item => <ChatBubbleLeft message={item} />)
                }
            </List>
        );
    }
}

export { ChatComponent }