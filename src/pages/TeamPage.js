// This page appears after coach signs in, shows coach's team + track and practice tabs

import { useState } from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import CompareButton from '../components/CompareButton';
import PracticeSelections1 from '../components/PracticeSelections1';
import PracticeSelections2 from '../components/PracticeSelections2';
import BeginButton from '../components/BeginButton';
import NextButton from '../components/NextButton';
import TrackSelections from '../components/TrackSelections';


// Team page function component:
export default function TeamPage(props) {
    // set up state hooks
    const [teamState, setTeamState] = useState("track");
    const [practiceTabState, setPracticeTabState] = useState("selections1")

    /* The following two arrow functions and two if...else statements render TeamPage according to its
    teamState and practiceSelectionsState */
    const handleSubHeaderClick = (event) => {
        setTeamState(event.target.textContent.toLowerCase());
        /* Note: ^^^ Using target.value is likely the more common construction here
        and more resilient to future app updates */
    }

    /* When the user has clicked on the practice tab and clicks the next button, this will trigger
    practiceTabState to change to "selections2" */
    const handleNextClick = (event) => {
        setPracticeTabState(event.target.value);
    }

    let practiceSelections;
    let nextOrBeginButton;
    if (practiceTabState === 'selections1') {
        practiceSelections = <PracticeSelections1 />;
        nextOrBeginButton = <NextButton handleClick={handleNextClick}/>;
    } else if (practiceTabState === 'selections2') {
        practiceSelections = <PracticeSelections2 />;
        nextOrBeginButton = <BeginButton />;
        // ^^^ This var will eventually include a backButton that changes state back to selections1
    }

    let mainList;
    let footButton;
    if (teamState === 'track') {
        mainList = <TrackSelections athletes={props.athletes} />
        footButton = <CompareButton />;
    } else if (teamState === 'practice') {
        mainList = practiceSelections;
        footButton = nextOrBeginButton;
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