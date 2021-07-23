// This button goes in the footer of the Team page when "practice" is selected in the SubHeader
import { Link } from 'react-router-dom';

export default function BeginButton() {
    return (
        <div className="BeginButton">
            <Link to="/practice">
                <button>Begin</button>
            </Link>
        </div>
    )
}