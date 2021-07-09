// This component goes right underneath the Nav comp
import TrackTab from './TrackTab';
import PracticeTab from './PracticeTab';

// If either component within SubHeader is clicked they will change the state of <Team />
export default function SubHeader(props) {
    return (
        <div className="SubNav">
            <TrackTab handleClick={props.handleClick}/> 
            <PracticeTab handleClick={props.handleClick}/>
        </div>
    )
};