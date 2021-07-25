// This component goes right underneath the Nav comp

// If either component within SubHeader is clicked they will change the state of <Team />
export default function SubHeader(props) {
    return (
        <div className="SubHeader">
            {props.children}
        </div>
    )
};