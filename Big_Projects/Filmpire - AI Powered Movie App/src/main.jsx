import { StrictMode } from 'react'; // Helps highlight potential issues in the app by adding extra checks during development
import { createRoot } from 'react-dom/client'; // For creating the root render node for React 18
import App from './App.jsx'; // Main app component
import { BrowserRouter } from 'react-router-dom'; // Enables routing for the app
import { Provider } from 'react-redux'; // Provides the Redux store to the app
import store from './app/store.js'; // The Redux store
import './index.css'; // Global styles
import ToggleColorMode from './utils/ToggleColorMode.jsx';


// Creating the root element and rendering the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {' '}
    {/* Helps with identifying potential issues by adding checks during development */}
    <Provider store={store}>
      {' '}
      {/* Makes Redux store available to the entire app */}
      <ToggleColorMode>
        {' '}
        {/* Wraps the app in the Material-UI theme */}
        <BrowserRouter>
          {' '}
          {/* Enables client-side routing */}
          <App /> {/* Main App component */}
        </BrowserRouter>
      </ToggleColorMode>
    </Provider>
  </StrictMode>
);
