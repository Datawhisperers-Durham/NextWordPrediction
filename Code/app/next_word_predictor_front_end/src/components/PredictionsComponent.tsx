import { Chip, Typography, Stack } from "@mui/material";
import { Component } from "react";

export default class PredictionsComponent extends Component {
    render() {
        return (
            <>
                <Stack direction={'row'} spacing={1}>
                    <Chip label="Predicted outcome 1" variant="outlined"></Chip>
                    <Chip label="Predicted outcome 2" variant="outlined"></Chip>
                    <Chip label="Predicted outcome 3" variant="outlined"></Chip>
                </Stack>
            </>
        );
    }
}