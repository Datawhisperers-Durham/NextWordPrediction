import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createRouterReducer, ReduxRouterState } from '@lagunovsky/redux-react-router';
import { ReduxRouter } from '@lagunovsky/redux-react-router';
import { Provider } from 'react-redux';
import Router from './Router';
import { Store } from 'redux';
import { Box } from '@mui/material';


type RootProps = {
    store: Store,
    history: any
}

// type RootProp = PropTypes.InferProps<typeof Root.propTypes>;

class Root extends Component<RootProps, any> {
    static propTypes: any;
    constructor(props: any) {
        super(props);
    }

    render() {
        const { store, history } = this.props;
        return (
            <Box sx={{ width: '100%', height: '100%' }}>
                <Provider store={store}>
                    <ReduxRouter history={history} children={<Router history={history} store={store} />} />
                </Provider>
            </Box>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root;
