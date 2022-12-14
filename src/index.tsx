import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import Redux
import { Provider } from 'react-redux';
import store from './redux/root/store';

// Import React-Router-Dom
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);