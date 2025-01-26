import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import useLogin from '../hooks/useLogin';

const Login: React.FC = () => {
  const { handleLogin, loading, error } = useLogin();

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
