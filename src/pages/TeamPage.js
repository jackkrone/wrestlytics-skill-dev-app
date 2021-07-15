// This page appears after coach signs in, shows coach's team + track and practice tabs

import { useState } from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

import TrackTab from '../components/for-team-page/track-tab-view/TrackTab';
import CompareButton from '../components/for-team-page/track-tab-view/CompareButton';
import TrackSelections from '../components/for-team-page/track-tab-view/TrackSelections';

import PracticeTab from '../components/for-team-page/practice-tab-view/PracticeTab';
import AthleteSelections from '../components/for-team-page/practice-tab-view/AthleteSelections';
import TechniqueSelections from '../components/for-team-page/practice-tab-view/TechniqueSelections';
import BeginButton from '../components/for-team-page/practice-tab-view/BeginButton';
import NextButton from '../components/for-team-page/practice-tab-view/NextButton';
import BackButton from '../components/for-team-page/practice-tab-view/BackButton';




// Team page function component:
export default function TeamPage(props) {
    // set up state hooks
    const [teamState, setTeamState] = useState("track");
    const [practiceTabState, setPracticeTabState] = useState("selections1")


    /* The following two if...else statements render TeamPage according to its
    teamState and practiceTabState */
    let practiceSelections;
    let nextOrBeginButton;
    if (practiceTabState === 'selections1') {
        practiceSelections = <AthleteSelections
                                athletes={props.athletes}
                                setAthleteChoice={props.setAthleteChoice}
                                /* athleteChoice={props.athleteChoice} */
                            />;
        nextOrBeginButton = <NextButton setPracticeTabState={setPracticeTabState}/>;
    } else if (practiceTabState === 'selections2') {
        practiceSelections = <TechniqueSelections
                                setTechniqueChoice={props.setTechniqueChoice}
                                techniqueChoice={props.techniqueChoice}
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