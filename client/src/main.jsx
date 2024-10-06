import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { persistor, store } from './Redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path='/*' element={ <App />}/>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)