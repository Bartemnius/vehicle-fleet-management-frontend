import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // 🛠 Dopasowanie do backendu
      });

      if (!response.ok) {
        throw new Error('Nieprawidłowe dane logowania');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/dashboard'); // 🔥 Przekierowanie po zalogowaniu
    } catch (error) {
      console.error('Błąd logowania:', error);
      alert('Błąd logowania. Spróbuj ponownie.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} /> {/* 🔥 Przekazujemy obsługę logowania do formularza */}
    </div>
  );
};

export default Login;
