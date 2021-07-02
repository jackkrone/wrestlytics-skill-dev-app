// This component goes right underneath the Nav comp
import React from 'react';

export const SubNav = () => {
    return (
        <div>
            <Track /> {/* this is a button... how to make clickable? */}
            <Practice /> {/* If these are clicked on they need to change the state of main */}
        </div>
    )
}