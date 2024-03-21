// AboutPage.jsx
import React from 'react';
import { useUser } from './UserContext';

export const AboutPage = () => {
  const { username, setUsername } = useUser();

  const handleChangeUsername = () => {
    const newName = prompt('新しいユーザー名を入力してください:');
    if (newName) {
      setUsername(newName);
    }
  };

  return (
    <div>
      <h2>Aboutページ</h2>
      <p>現在のユーザー名: {username}</p>
      <button onClick={handleChangeUsername}>ユーザー名を変更</button>
    </div>
  );
};
