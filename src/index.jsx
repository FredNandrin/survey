import React from 'react';
import ReactDOM from 'react-dom';
import SurveyApp from './survey/app';

if (document.getElementById('surveyApp') !== null) {
    ReactDOM.render(<SurveyApp/>, document.getElementById('surveyApp')
    )
    ;
} else {
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
