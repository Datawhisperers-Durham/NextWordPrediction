import React from 'react'
import { TextField, Button } from "@mui/material";
import { createStyles, makeStyles, Theme } from '@mui/material/styles';
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
            <form className={classes.wrapForm} noValidate autoComplete="off">
                <TextField
                    id="standard-text"
                    label="メッセージを入力"
                    className={classes.wrapText}
                //margin="normal"
                />
                <Button variant="contained" color="primary" className={classes.button}>
                    <SendIcon />
                </Button>
            </form>
        </>
    )
}



