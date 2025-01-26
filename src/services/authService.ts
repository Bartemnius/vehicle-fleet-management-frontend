
import AUTH_SERVICE_URL from '../config';

export const login = async (email: string, password: string) => {
    const response = await fetch(`${AUTH_SERVICE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Invalid credentials');
    }
    return response.json();
  };
  