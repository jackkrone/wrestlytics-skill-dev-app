// This component adds one to the diplayed number of reps for a given technique

import { BiPlus } from 'react-icons/bi';

export default function PlusOneButton(props) {
    
    const addOne = () => {        
        props.setRepCounts(
            (prevRepCounts) => {
                let newRepCounts = {...prevRepCounts};
                newRepCounts[props.technique] += 1;
                console.log(newRepCounts);
                return newRepCounts;
            }
        );
    }
    
    return (
        <div className="MinusOne">
            <button onClick={addOne}><BiPlus /></button>
        </div>
    );
}