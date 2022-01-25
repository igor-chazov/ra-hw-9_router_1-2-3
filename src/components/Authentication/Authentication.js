import './Authentication.css';
import React from 'react';
import AuthProvider from './AuthProvider/AuthProvider';
import RouteWrapper from './RouteWrapper/RouteWrapper';

function Authentication() {
  return (
    <AuthProvider>
      <RouteWrapper />
    </AuthProvider>
  );
}

export default Authentication;
