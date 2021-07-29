// The footer's main rendering job is to render it's children
import React from 'react';

export default function Footer({ children }) {
  return (
    <div className="Footer">
      {children}
    </div>
  );
}
