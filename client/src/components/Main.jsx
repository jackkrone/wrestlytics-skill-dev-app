// This is the main scrolling area on the screen
import React from 'react';

export default function Main({ children }) {
  return (
    <div className="Main">
      <ul>
        {children}
      </ul>
    </div>
  );
}
