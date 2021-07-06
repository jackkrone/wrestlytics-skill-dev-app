// This component goes right underneath the Nav comp
import Track from './Track';
import Practice from './Practice';

export default function SubNav() {
    return (
        <div className="SubNav">
            <Track /> {/* this is a button... how to make clickable? */}
            <Practice /> {/* If these are clicked on they need to change the state of main */}
        </div>
    )
};