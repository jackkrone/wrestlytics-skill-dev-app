// This page appears after coach signs in, shows coach's team + track and practice tabs

import { useState } from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Compare from '../components/Compare';
import Begin from '../components/Begin';
import PracticeSelections from '../components/PracticeSelections';
import TrackSelections from '../components/TrackSelections';


// Team page function component:
export default function Team(props) {
    // set up state hook
    const [teamState, setTeamState] = useState("track");

    // The following two code blocks render Team page according to its state
    // (either track or practice state)
    const handleSubHeaderClick = (event) => {
        setTeamState(event.target.textContent.toLowerCase());
    }

    let mainList = undefined;
    let footButton = undefined;
    if (teamState === 'track') {
        mainList = <TrackSelections athletes={props.athletes} />
        footButton = <Compare />;
    } else if (teamState === 'practice') {
        mainList = <PracticeSelections />;
        footButton = <Begin />;
    }

    return (
        <div className="Team">
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