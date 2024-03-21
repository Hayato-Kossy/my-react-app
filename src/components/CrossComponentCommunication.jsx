// Code for CrossComponentCommunication.jsx
import React from "react";
import { Link } from "react-router-dom";

export const CrossComponentCommunication = () => {
  return (
    <nav>
      <Link to="/home">Homeに戻る</Link> |{" "}
      <Link to="/about">Aboutページへ</Link>
    </nav>
  );
};
