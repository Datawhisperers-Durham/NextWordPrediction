import { Typography, Stack, Box } from "@mui/material";
import { Component } from "react";
import * as React from 'react';
import Chip from '@mui/material/Chip';

type PredictionProps = {
    predictions: PredictionsMessage,
    onPredictionClick: (prediction: string) => void,
}

type PredictionsMessage = {
    id: number,
    prediction_output: string,
    user_input: string
}

export default class PredictionsComponent extends Component<PredictionProps> {
    render() {
        const handleChipClick = (item: string) => {
            this.props.onPredictionClick(item)
        }

        var predictionWidgets : any[] = []
        this.props?.predictions?.prediction_output?.split(",")?.forEach(item => {
            predictionWidgets.push(<Box onClick={() => handleChipClick(item)}><Chip label={item} variant="outlined"/> </Box>)
        })

        return (
            <>
                <Stack direction={'row'} spacing={1}>
                    {
                       predictionWidgets 
                    }
                </Stack>
            </>
        );
    }
}