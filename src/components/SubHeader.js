// This component goes right underneath the Nav comp
import Track from './Track';
import Practice from './Practice';

// If either component within SubHeader is clicked they will change the state of <Team />
export default function SubHeader(props) {
    return (
        <div className="SubNav">
            <Track handleClick={props.handleClick}/> 
            <Practice handleClick={props.handleClick}/>
        </div>
    )
};