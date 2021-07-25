// This component subtracts one from the diplayed number of reps for a given technique

import { BiMinus } from 'react-icons/bi';

export default function MinusOneButton(props) {
    
    const subtractOne = () => {
        if (props.repCounts[props.technique] === 0) {
            return
        } else {        
            props.setRepCounts(
                (prevRepCounts) => {
                    let newRepCounts = {...prevRepCounts};
                    newRepCounts[props.technique] -= 1;
                    console.log(newRepCounts);
                    return newRepCounts;
                }
            );
        }
    }
    
    return (
        <div className="MinusOne">
            <button onClick={subtractOne}><BiMinus /></button>
        </div>
    );
}