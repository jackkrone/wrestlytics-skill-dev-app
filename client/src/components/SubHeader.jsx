// This component goes right underneath the Nav comp
import React from 'react';

// If either child within SubHeader is clicked the user will change the state of <Team />
export default function SubHeader({ children }) {
  return (
    <div className="SubHeader">
      {children}
    </div>
  );
}
