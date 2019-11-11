import React from 'react';
import {Provider} from 'react-redux';
import './app.css';
import Store from './store';
import BaseSurvey from './base/BaseSurvey';

class SurveyApp extends React.Component {
    render() {
        return (
            <Provider
                store={Store}>
                <BaseSurvey/>
            </Provider>
        )
    }
};

export default SurveyApp;

