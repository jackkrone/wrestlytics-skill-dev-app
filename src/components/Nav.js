import React from 'react';

export const Nav = (props) => {
    return (
        <div>
            <h1>props.teamOrAthlete</h1>
            {props.children /* reason for this is for BurgerMenu or Stopwatch inclusion */}
        </div>
    )
}