import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

const Login: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('Logging in with:', email, password);
    // Tutaj możesz dodać fetch do backendu
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
