import React from 'react'
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


export const ChatMessageComponent = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{ display: 'flex', }}>
                <TextField
                    id="standard-text"
                    label="Type your message here..."
                    className={classes.wrapText}
                />
                <Fab color="primary" aria-label="send" sx={{ justifyContent: 'center', alignContent: 'center', ml: '10px' }}>
                    <SendIcon />
                </Fab>
            </Box>
        </>
    )
}



