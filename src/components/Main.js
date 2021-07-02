// This one will be difficult. It will be the main scrolling area on the screen
// I need

// This component requires a {this.props.children} inside the render

import React from 'react';

export const Main = (props) => {
    return (
        <div>
            <ul>{props.children}</ul>
            {/* each one of these ^ needs to be a button as well, not only a list */}
        </div>
    )
}