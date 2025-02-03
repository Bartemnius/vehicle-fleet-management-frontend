import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // 🔥 Jeśli nie ma tokena, wracamy do logowania
    }
  }, []);

  return (
    <div>
      <h1>Witaj w systemie zarządzania flotą!</h1>
      <p>Jesteś zalogowany 🎉</p>
    </div>
  );
};

export default Dashboard;
