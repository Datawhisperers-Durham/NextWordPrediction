import React, { useEffect, useState } from 'react'
import { TextField, Button, Fab, Box } from "@mui/material";
import { createStyles, makeStyles, Theme } from '@mui/styles';
import SendIcon from '@mui/icons-material/Send';


const useStyles = makeStyles((theme) =>
    createStyles({
        wrapForm: {
            display: "flex",
            justifyContent: "center",
            width: "95%",
            margin: `${theme.spacing(0)} auto`
        },
        wrapText: {
            width: "100%"
        },
        button: {
            //margin: theme.spacing(1),
        },
    })
);


export const ChatMessageComponent = (props) => {
    const classes = useStyles();

    const onSendMessageClick = () => {
        props.onTyping("")
    }

    const onTyping = (message) => {
        props.onTyping(message)
        props.predictFor(message)
    }

    return (
        <>
            <Box sx={{ display: 'flex', }}>
                <TextField
                    id="standard-text"
                    label="Type your message here..."
                    className={classes.wrapText}
                    onChange={(e) => onTyping(e.target.value)}
                    value={props.message}
                />
                {/* <Fab color="primary" aria-label="send" sx={{ justifyContent: 'center', alignContent: 'center', ml: '10px' }} onClick={(e) => onSendMessageClick()}>
                    <SendIcon />
                </Fab> */}
            </Box>
        </>
    )
}



