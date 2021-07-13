// This button goes in the footer of the team page when the practice tab is selected
// ... and the user is interacting with PracticeSelections1 component

export default function NextButton(props) {
    return (
        <div className="NextButton">
            <button value="selections2" onClick={props.handleClick}>Next</button>
            {/* Clicking the button presents the user with PracticeSelections2*/}
        </div>
    )
}