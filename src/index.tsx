// External imports
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

// Local imports
import App from 'app';
import initI18n from 'widgets/lang';
import reportWebVitals from 'shared/util/web-vitals';

// Global initialization
initI18n();

const htmlRoot = document.getElementById('root') as HTMLElement;
const reactRoot = ReactDOM.createRoot(htmlRoot);

reactRoot.render(
  process.env.REACT_APP_SCRICT_MODE === 'true' ? (
    <StrictMode>
        <App />W
    </StrictMode>
  ) : (
      <App />
  ),
);

if (process.env.REACT_APP_ENV !== 'production') {
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // eslint-disable-next-line no-console
  reportWebVitals(console.log);
}
