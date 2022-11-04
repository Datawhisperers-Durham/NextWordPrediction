import { AppBar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";
import React from "react";
import { render } from "react-dom";

export default class Navbar extends Component<any> {
    render() {
        return (
            <AppBar sx={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ p: 1, color: this.props.theme.palette.secondary.main, fontWeight: 'bold' }}
                >
                    Next Word Predictor by DataWhisperers
                </Typography>
            </AppBar>
        );
    }
}