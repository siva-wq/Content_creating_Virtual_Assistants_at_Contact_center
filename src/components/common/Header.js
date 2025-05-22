import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { logout } from '../../features/auth/authSlice'; 

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();


  const [user, setUser] = useState(null);


  useEffect(() => {
    
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    setUser(null);
    navigate('/login');
  };

  return (
    <header style={{ backgroundColor: '#3f51b5', padding: '10px 20px' }}>
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={() => navigate('/menu')}
          style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px' }}
        >
          ☰
        </button>

        <h1 style={{ flexGrow: 1, color: '#fff', fontSize: '24px' }}>
          {t('welcome')}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <select
            value={i18n.language}
            onChange={handleLanguageChange}
            style={{
              color: 'white',
              backgroundColor: 'transparent',
              border: '1px solid white',
              padding: '5px 10px',
              borderRadius: '4px',
            }}
          >
            <option value="en">English</option>
            <option value="te">తెలుగు</option>
          </select>

          {user ? (
            <>
              <button onClick={() => navigate('/dashboard')} style={buttonStyle}>
                {t('dashboard')}
              </button>
              <button onClick={() => navigate('/chat')} style={buttonStyle}>
                {t('chat')}
              </button>
              <button onClick={() => navigate('/analytics')} style={buttonStyle}>
                {t('analytics')}
              </button>
              <button onClick={handleLogout} style={buttonStyle}>
                {t('logout')}
              </button>
            </>
          ) : (
            <button onClick={() => navigate('/login')} style={buttonStyle}>
              {t('login')}
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

const buttonStyle = {
  backgroundColor: 'transparent',
  border: '1px solid white',
  color: 'white',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Header;
