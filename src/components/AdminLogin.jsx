import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
  const [pin, setPin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://portfolio-admin-server-76sn.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pin }),
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar token en localStorage
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminTokenExpiry', Date.now() + data.expiresIn);
        onLogin(data.token);
      } else {
        setError(data.error || 'PIN incorrecto');
      }
    } catch (error) {
      setError('Error de conexión. Verifica que el servidor esté funcionando.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login__container">
        <h1 className="admin-login__title">PANELL D'ADMINISTRACIÓ</h1>
        
        <form onSubmit={handleSubmit} className="admin-login__form">
          <div className="admin-login__input-group">
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="PIN d'accés"
              className="admin-login__input"
              required
              autoFocus
            />
          </div>
          
          {error && (
            <div className="admin-login__error">
              {error}
            </div>
          )}
          
          <button 
            type="submit" 
            className="admin-login__button"
            disabled={isLoading}
          >
            {isLoading ? 'Verificant...' : 'ACCEDIR'}
          </button>
        </form>
        
        <div className="admin-login__info">
          <p>Servidor: portfolio-admin-server-76sn.onrender.com</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
