import { createRoot } from 'react-dom/client';
import SurveyApp from './survey/app';

const container = document.getElementById('surveyApp');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<SurveyApp tab="home" />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

