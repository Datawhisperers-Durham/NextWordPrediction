import React from "react";
import { createStyles, makeStyles, Theme } from "@mui/styles";
import { Avatar, Box, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Stack } from "@mui/system";

const useStyles = makeStyles((theme) =>
    createStyles({
        messageRow: {
            display: "flex"
        },
        messageRowRight: {
            display: "flex",
            justifyContent: "flex-end"
        },
        messageBlue: {
            position: "relative",
            marginLeft: "20px",
            marginBottom: "10px",
            padding: "10px",
            backgroundColor: "#ECF1FE",
            width: "60%",
            //height: "50px",
            textAlign: "left",
            font: "400 .9em 'Open Sans', sans-serif",
            border: "1px solid #97C6E3",
            borderRadius: "10px",
            "&:after": {
                content: "''",
                position: "absolute",
                width: "0",
                height: "0",
                borderTop: "15px solid #ECF1FE",
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                top: "0",
                left: "-15px"
            },
            "&:before": {
                content: "''",
                position: "absolute",
                width: "0",
                height: "0",
                borderTop: "17px solid #97C6E3",
                borderLeft: "16px solid transparent",
                borderRight: "16px solid transparent",
                top: "-1px",
                left: "-17px"
            }
        },
        messageOrange: {
            position: "relative",
            marginRight: "20px",
            marginBottom: "10px",
            padding: "10px",
            backgroundColor: "#f8e896",
            width: "60%",
            //height: "50px",
            textAlign: "left",
            font: "400 .9em 'Open Sans', sans-serif",
            border: "1px solid #dfd087",
            borderRadius: "10px",
            "&:after": {
                content: "''",
                position: "absolute",
                width: "0",
                height: "0",
                borderTop: "15px solid #f8e896",
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                top: "0",
                right: "-15px"
            },
            "&:before": {
                content: "''",
                position: "absolute",
                width: "0",
                height: "0",
                borderTop: "17px solid #dfd087",
                borderLeft: "16px solid transparent",
                borderRight: "16px solid transparent",
                top: "-1px",
                right: "-17px"
            }
        },

        messageContent: {
            padding: 0,
            margin: 0
        },
        messageTimeStampRight: {
            position: "absolute",
            fontSize: ".85em",
            fontWeight: "300",
            marginTop: "10px",
            bottom: "-3px",
            right: "5px"
        },

        orange: {
            color: deepOrange[500],
            backgroundColor: deepOrange[500],
            width: theme.spacing(4),
            height: theme.spacing(4)
        },
        avatarNothing: {
            color: "transparent",
            backgroundColor: "transparent",
            width: theme.spacing(4),
            height: theme.spacing(4)
        },
        displayName: {
            marginLeft: "20px"
        }
    })
);

export const ChatBubbleLeft = (props) => {
    const message = props.message ? props.message : "no message";
    const timestamp = props.timestamp ? props.timestamp : "";
    const photoURL = props.photoURL ? props.photoURL : '/assets/man.png';
    const displayName = props.displayName ? props.displayName : "User";
    const classes = useStyles();
    return (
        <>
            <Stack direction={'row'} sx={{ justifyContent: 'flex-start', alignItems: 'flex-start' }} className={classes.messageRow}>
                <Avatar
                    alt={displayName}
                    className={classes.orange}
                    src={photoURL}
                    sx={{ height: '2em', width: '2em', p: 0, m: 0, mt: '10px', }}
                ></Avatar>
                <Stack direction={'column'} className={classes.messageBlue}>
                    <Typography variant="subtitle2">{displayName}</Typography>
                    <Typography variant="body1">
                        {message}
                    </Typography>
                    <Typography variant="subtitle1">{timestamp}</Typography>


                </Stack>
            </Stack>
        </>
    );
};

export const ChatBubbleRight = (props) => {
    const classes = useStyles();
    const message = props.message ? props.message : "no message";
    const timestamp = props.timestamp ? props.timestamp : "";
    return (
        <div className={classes.messageRowRight}>
            <div className={classes.messageOrange}>
                <p className={classes.messageContent}>{message}</p>
                <div className={classes.messageTimeStampRight}>{timestamp}</div>
            </div>
        </div>
    );
};
