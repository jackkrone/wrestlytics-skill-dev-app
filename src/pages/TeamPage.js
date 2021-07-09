// This page appears after coach signs in, shows coach's team + track and practice tabs

import { useState } from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import CompareButton from '../components/CompareButton';
import BeginButton from '../components/BeginButton';
import PracticeSelections1 from '../components/PracticeSelections1';
// import Practice Selections2 from '../components/PracticeSelections2';
import TrackSelections from '../components/TrackSelections';


// Team page function component:
export default function TeamPage(props) {
    // set up state hook
    const [teamState, setTeamState] = useState("track");

    // The following two code blocks render Team page according to its state
    // (either track or practice state)
    const handleSubHeaderClick = (event) => {
        setTeamState(event.target.textContent.toLowerCase());
        /* Note: this could also be event.target.value and I would need to set a value="..."
        for each of the buttons in SubHeader. Using target.value is likely the more common construction
        and more reselient to future app updates */
    }

    let mainList = undefined;
    let footButton = undefined;
    if (teamState === 'track') {
        mainList = <TrackSelections athletes={props.athletes} />
        footButton = <CompareButton />;
    } else if (teamState === 'practice') {
        mainList = <PracticeSelections1 />;
        footButton = <BeginButton />;
    }

    return (
        <div className="TeamPage">
            <Header title={props.teamName} >
                <Menu />
            </Header>
            <SubHeader handleClick={handleSubHeaderClick}/>
            <Main>
                {mainList}
            </Main>
            <Footer>
                <br />
                {footButton}
            </Footer>
        </div>
    )
}