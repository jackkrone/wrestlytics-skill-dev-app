// This component renders in the Main of PracticePage
// It renders once for each technique stored in techniqueChoice (state variable of App.js)

import MinusOneButton from './MinusOneButton';
import Reps from './Reps';
import PlusOneButton from './PlusOneButton';

export default function Counter(props) {
    return (
        <div className="Counter">
            <h5>{props.technique}</h5>
            <MinusOneButton repCounts={props.repCounts} setRepCounts={props.setRepCounts} technique={props.technique}/>
            <Reps repCounts={props.repCounts} technique={props.technique}/>
            <PlusOneButton setRepCounts={props.setRepCounts} technique={props.technique}/>
        </div>
    );
}