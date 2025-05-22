import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// Components
import Dashboard from './components/Dashboard';
import Login from './components/auth/Login';
import Chat from './components/chat/Chat';
import Analytics from './components/analytics/Analytics';
import Header from './components/common/Header';
import PrivateRoute from './components/auth/PrivateRoute';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <Login/>
  );
}

export default App;
