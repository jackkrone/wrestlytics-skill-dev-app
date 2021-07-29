import React from 'react';

export default function Header({ children, title }) {
  return (
    <div className="Header">
      <h1>{title}</h1>
      {children /* reason for this is for BurgerMenu or Stopwatch inclusion */}
    </div>
  );
}
