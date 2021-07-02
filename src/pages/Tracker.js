// This page is the actual rep counter aspect of the app
/* To-do:
    * import relevant components
*/

import React from 'react';

export const Tracker = () => {
    return (
        <div>
            <Nav /> {/* This instance may require a child for stopwatch */}
            <Main>
                {/* Child elems should be techniques being tracked */}
            </Main>
            <Footer>
                {/*<EndButton />*/}
                {/*SpeechButton />*/}
            </Footer>
        </div>
    )
}