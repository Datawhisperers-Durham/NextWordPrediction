import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from "../redux/action/next_prediction_action";
import PropTypes from 'prop-types';
import App from "../App";


const RequireAuth = ({ isAuthenticated, children }) => {
    if (isAuthenticated) return children;
    return <Navigate to="/login" replace />
}

type RouterProp = PropTypes.InferProps<typeof Router.propTypes>;

class Router extends Component<RouterProp> {
    static propTypes: any;
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <>
                <Routes>
                    <Route
                        path="*"
                        element={
                            <App history={this.props.history}
                                page="createPost"
                                path={this.props.history.location.pathname.toLowerCase()}
                                store={this.props.store} />
                        } />
                </Routes>
            </>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        showLoader: state.appData.showLoader,
        loginStatus: state.appData.loginUser.status
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

Router.propTypes = {
    showLoader: PropTypes.bool,
    loginStatus: PropTypes.string
};

export default (connect(mapStateToProps, mapDispatchToProps)(Router));
