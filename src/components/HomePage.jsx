import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      width: '100vw',
    }}>
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          fontSize: '2.5rem',
        }}>
          Recursion React Course
        </h1>
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}>
          <Link to="/profile-cards" style={{
            padding: '10px 15px',
            background: '#007BFF',
            color: '#FFFFFF',
            borderRadius: '5px',
          }}>ProfileCards</Link>
          <Link to="/fruits-list " style={{
            padding: '10px 15px',
            background: '#007BFF',
            color: '#FFFFFF',
            borderRadius: '5px',
          }}>FruitsList</Link>
                    <Link to="/calculator " style={{
            padding: '10px 15px',
            background: '#007BFF',
            color: '#FFFFFF',
            borderRadius: '5px',
          }}>Calculator</Link>
        </nav>
      </div>
    </div>
  );
}
