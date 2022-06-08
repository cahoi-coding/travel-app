import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import 'style/__app.scss';

import Tour from 'pages/Tour';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Tour/>
  </React.StrictMode>
);

reportWebVitals();