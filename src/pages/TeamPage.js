// This page appears after coach signs in, shows coach's team + track and practice tabs

import { useState } from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import CompareButton from '../components/team-page-specific/CompareButton';
import PracticeSelections1 from '../components/team-page-specific/PracticeSelections1';
import PracticeSelections2 from '../components/team-page-specific/PracticeSelections2';
import BeginButton from '../components/team-page-specific/BeginButton';
import NextButton from '../components/team-page-specific/NextButton';
import BackButton from '../components/team-page-specific/BackButton';
import TrackSelections from '../components/team-page-specific/TrackSelections';
import TrackTab from '../components/team-page-specific/TrackTab';
import PracticeTab from '../components/team-page-specific/PracticeTab';


// Team page function component:
export default function TeamPage(props) {
    // set up state hooks
    const [teamState, setTeamState] = useState("track");
    const [practiceTabState, setPracticeTabState] = useState("selections1")


    /* The following two if...else statements render TeamPage according to its
    teamState and practiceSelectionsState */
    let practiceSelections;
    let nextOrBeginButton;
    if (practiceTabState === 'selections1') {
        practiceSelections = <PracticeSelections1
                                athletes={props.athletes}
                                setAthleteChoice={props.setAthleteChoice}
                            />;
        nextOrBeginButton = <NextButton setPracticeTabState={setPracticeTabState}/>;
    } else if (practiceTabState === 'selections2') {
        practiceSelections = <PracticeSelections2
                                setTechniqueChoice={props.setTechniqueChoice}
                            />;
        nextOrBeginButton = (
            <div>
                <BackButton setPracticeTabState={setPracticeTabState}/>
                <BeginButton />
            </div>
        )

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
            <SubHeader>
                <TrackTab setTeamState={setTeamState}/> 
                <PracticeTab setTeamState={setTeamState}/>
            </SubHeader>
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