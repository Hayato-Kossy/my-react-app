// Home.jsx
import React from 'react';
import { useUser } from './UserContext';

export const Home = () => {
  const { username } = useUser();

  return (
    <div>
      <h2>ホームページ</h2>
      <p>こんにちは、{username}さん!</p>
    </div>
  );
};
