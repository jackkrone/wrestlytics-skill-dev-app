// This page is the actual rep counter aspect of the app
// This is the main function of the app -- what you use while you ~Practice~

// import { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import EndButton from '../components/EndButton';

export default function PracticePage() {
    return (
        <EndButton />

        /*
        <div className="PracticePage">
            <Header title="Athlete Name"> {/* athlete name needs to be passed as props */}
                {/* <Stopwatch /> ...to be created later */}
        /*    </Header>
            <Main>
                {/* Child elems should be techniques being tracked, also need to be passed as props. 
                I need to create a single counting component that will be repeated as many times as a the
                number of techniques chosen. Props should populate the name of each counter comp instance */}
        /*    </Main>
            <Footer>
                <EndButton />
                {/*SpeechButton /> ... maybe not necessary... just listen automatically*/}
        /*    </Footer>
        </div>
    )
}