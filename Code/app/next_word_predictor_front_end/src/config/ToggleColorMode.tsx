import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import React, { Component, createContext, lazy, Suspense } from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import App from '../App';
import { Box, CssBaseline, Stack } from '@mui/material';
import { connect } from 'react-redux';


const Navbar = lazy(() => import('src/components/Navbar'));
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });
const clientSideEmotionCache = createEmotionCache();

const inlineStyles = () => ({
    '&': {
        display: 'inline',
    },
});

class ToggleColorMode extends React.PureComponent<any, any> {
    state = {
        mode: window.localStorage.getItem('theme') ?? 'light',
        colorMode: 'light'
    }

    componentDidMount(): void {
        // this.props.appActions.fetchNavigationMenu();
    }

    render() {
        const mode: any = this.state.mode;
        const theme = createTheme({
            palette: {
                mode: mode,
                primary: mode === 'dark' ? {
                    900: "#191E28",
                    800: "#4C5766",
                    700: "#758296",
                    600: "#A9B7C2",
                    500: "#C4CCD7",
                    400: "#C4CCD7",
                    300: "#DAE1E8",
                    200: "#DAE1E8",
                    100: "#F6F7F9",
                    50: "#F6F7F9",
                    A100: "#191E28",
                    A200: "#191E28",
                    A400: "#191E28",
                    A700: "#191E28",
                    main: "#222"
                } : {
                    900: "#181E59",
                    800: "#1C2473",
                    700: "#283293",
                    600: "#3845B9",
                    500: "#4E5CD6",
                    400: "#6275D8",
                    300: "#839BE9",
                    200: "#CAD5F6",
                    100: "#ECF1FE",
                    50: "#E0F2F1",
                    A100: "#ECF1FE",
                    A200: "#ECF1FE",
                    A400: "#ECF1FE",
                    A700: "#ECF1FE",
                    main: "#ECF1FE"
                },
                secondary: mode === 'light' ? {
                    900: "#181E27",
                    800: "#313A47",
                    700: "#5B6677",
                    600: "#7F8DA1",
                    500: "#9EB0C1",
                    400: "#C1CAD3",
                    300: "#CBD5DF",
                    200: "#D4DBE1",
                    100: "#DADADB",
                    50: "#ECEFF1",
                    A100: "#82B1FF",
                    A200: "#448AFF",
                    A400: "#2979FF",
                    A700: "#2962FF",
                    main: "#000"
                } : {
                    900: "#0D47A1",
                    800: "#1565C0",
                    700: "#1976D2",
                    600: "#1E88E5",
                    500: "#2196F3",
                    400: "#42A5F5",
                    300: "#64B5F6",
                    200: "#90CAF9",
                    100: "#BBDEFB",
                    50: "#E3F2FD",
                    A100: "#82B1FF",
                    A200: "#448AFF",
                    A400: "#2979FF",
                    A700: "#2962FF",
                    main: "#FFFFFF"
                },
                divider: mode === 'dark' ? "#546E7A" : "#ECECEC",
                error: {
                    900: "#490F12",
                    800: "#730F15",
                    700: "#A70D19",
                    600: "#D11925",
                    500: "#DA4C51",
                    400: "#DA4C51",
                    300: "#EF979A",
                    200: "#EF979A",
                    100: "#FBE2E2",
                    50: "#FBE2E2",
                },
                warning: {
                    900: "#493910",
                    800: "#785A18",
                    700: "#BD962F",
                    600: "#F0C052",
                    500: "#F8DC8E",
                    400: "#F8DC8E",
                    300: "#FDF1CD",
                    200: "#FDF1CD",
                    100: "#FFFCF1",
                    50: "#FFFCF1",
                },
                info: {
                    900: "#493910",
                    800: "#785A18",
                    700: "#BD962F",
                    600: "#F0C052",
                    500: "#F8DC8E",
                    400: "#F8DC8E",
                    300: "#FDF1CD",
                    200: "#FDF1CD",
                    100: "#FFFCF1",
                    50: "#FFFCF1",
                },
                success: {
                    900: "#13412C",
                    800: "#176632",
                    700: "#228F46",
                    600: "#32B85F",
                    500: "#65D48E",
                    400: "#65D48E",
                    300: "#9AEDB4",
                    200: "#9AEDB4",
                    100: "#DEFDE7",
                    50: "#DEFDE7",
                },
                grey: {
                    900: "#191E28",
                    800: "#4C5766",
                    700: "#758296",
                    600: "#A9B7C2",
                    500: "#C4CCD7",
                    400: "#C4CCD7",
                    300: "#DAE1E8",
                    200: "#DAE1E8",
                    100: "#F6F7F9",
                    50: "#F6F7F9",
                },
                background: {
                    default: mode === 'dark' ? '#000' : '#F6F7F9',
                    paper: mode === 'dark' ? '#000' : '#F6F7F9',
                },
                text: mode === 'dark' ? {
                    primary: '#FFF',
                    disabled: '#AbABAB'
                } : {
                    primary: '#222',
                    disabled: '#999'
                },
                action: mode === 'dark' ? {
                    hover: '#EEEEEE',
                    selected: '#222B82',
                    active: '#4C5ACF'
                } : {
                    hover: '#FAFAFA',
                    selected: '#222B82',
                    active: '#4C5ACF'
                }
            },
            typography: {
                fontFamily: [
                    'Avenir',
                    'HelveticaNueue',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                ].join(','),
                subtitle1: {
                    fontFamily: [
                        'Avenir',
                        '-apple-system',
                        'BlinkMacSystemFont',
                    ].join(','),
                    fontWeight: 300,
                    fontSize: "15px",
                    lineHeight: '27px',
                    color: mode == 'dark' ? '#FFF' : '#222'
                },
                subtitle2: {
                    fontFamily: [
                        'Avenir',
                        '-apple-system',
                        'BlinkMacSystemFont',
                    ].join(','),
                    fontWeight: 200,
                    fontSize: "14px",
                    lineHeight: '26px',
                    color: mode == 'dark' ? '#fff' : '#333'
                },
                body1: {
                    fontFamily: [
                        'Avenir',
                        '-apple-system',
                        'BlinkMacSystemFont',
                    ].join(','),
                    fontWeight: 300,
                    fontSize: "18px",
                    lineHeight: '30px',
                    color: mode == 'dark' ? '#fff' : '#222',
                    padding: 0,
                    margin: 0
                },
                body2: {
                    fontFamily: [
                        'Avenir',
                        '-apple-system',
                        'BlinkMacSystemFont',
                    ].join(','),
                    fontWeight: 300,
                    fontSize: "17px",
                    lineHeight: '29px',
                    color: mode == 'dark' ? '#fff' : '#222',
                    padding: 0,
                    margin: 0
                },
                h1: {
                    fontFamily: [
                        'HelveticaNueue',
                        '-apple-system',
                        'BlinkMacSystemFont',
                    ].join(','),
                    fontWeight: 400,
                    fontSize: "40px",
                    lineHeight: '52px',
                    color: mode == 'dark' ? '#fff' : '#151C55'
                },
                h2: {
                    fontFamily: [
                        'HelveticaNueue',
                        '-apple-system',
                        'BlinkMacSystemFont',
                    ].join(','),
                    fontWeight: 400,
                    fontSize: "34px",
                    lineHeight: '46px',
                    color: mode == 'dark' ? '#fff' : '#151C55'
                },
                h3: {
                    fontFamily: [
                        'HelveticaNueue',
                        'BlinkMacSystemFont',
                        '-apple-system',
                    ].join(','),
                    fontWeight: 400,
                    fontSize: "26px",
                    lineHeight: '38px',
                    color: mode == 'dark' ? '#fff' : '#151C55'
                },
                h4: {
                    fontFamily: [
                        'HelveticaNueue',
                        'BlinkMacSystemFont',
                        '-apple-system',
                    ].join(','),
                    fontWeight: 400,
                    fontSize: "24px",
                    lineHeight: '36px',
                    color: mode == 'dark' ? '#fff' : '#151C55'
                },
                h5: {
                    fontFamily: [
                        'HelveticaNueue',
                        'BlinkMacSystemFont',
                        '-apple-system',
                    ].join(','),
                    fontWeight: 400,
                    fontSize: "22px",
                    lineHeight: '34px',
                    color: mode == 'dark' ? '#fff' : '#151C55'
                },
                h6: {
                    fontFamily: [
                        'HelveticaNueue',
                        'Avenir',
                        'BlinkMacSystemFont',
                        '-apple-system',
                    ].join(','),
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: '32px',
                    color: mode == 'dark' ? '#fff' : '#151C55'
                },
                "fontWeightLight": 200,
                "fontWeightRegular": 300,
                "fontWeightMedium": 500,
                "allVariants": {
                    "margin": "0px",
                    "padding": "0px",
                    "userSelect": "text",
                    "color": "#292929",
                    ...(inlineStyles() as any),
                },
            }
        });

        const colorMode = { toggleColorMode: () => this.colorMode() };

        return (
            <CacheProvider value={clientSideEmotionCache}>
                <ColorModeContext.Provider value={colorMode}>
                    <Box className={mode === 'dark' ? "mode-dark" : "mode-light"} sx={{ p: 0, m: 0, backgroundColor: theme.palette.background.default, width: '100%', height: '100%', display: 'flex' }}>
                        <ThemeProvider theme={theme}>
                            <Suspense fallback={<div />}>
                                <Navbar menu={this.props.naviagtionMenu} colorMode={colorMode} theme={theme} />
                            </Suspense>
                            <CssBaseline />
                            <App store={this.props.store}
                                history={this.props.history}
                                theme={theme}
                                colorMode={mode}
                                page={this.props.page}
                                path={this.props.path} />
                        </ThemeProvider>
                    </Box>
                </ColorModeContext.Provider>
            </CacheProvider>
        );
    }

    colorMode() {
        window.localStorage.setItem('theme', this.state.mode == 'dark' ? 'light' : 'dark');
        this.setState({
            mode: this.state.mode == 'dark' ? 'light' : 'dark'
        });
    }
}

function createEmotionCache() {
    return createCache({ key: 'css', prepend: true });
}


function mapStateToProps(state: any) {
    return {
        naviagtionMenu: state?.appData?.appReducer?.naviagtionMenu,
        error: state?.appData?.appReducer?.error,
        tableOfContent: state?.appData?.appReducer?.tableOfContent
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        appActions: {
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleColorMode);
