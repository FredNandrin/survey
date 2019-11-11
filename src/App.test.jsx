import React from 'react';
import ReactDOM from 'react-dom';
import SurveyApp from "./survey/app";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SurveyApp />, div);

  ReactDOM.unmountComponentAtNode(div);
});
