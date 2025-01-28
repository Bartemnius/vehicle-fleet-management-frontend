
import AUTH_SERVICE_URL from '../config';

export const login = async (username: string, password: string) => {
    const response = await fetch(`${AUTH_SERVICE_URL}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error('Invalid credentials');
    }
    return response.json();
  };
  