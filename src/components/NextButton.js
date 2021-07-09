// This button goes in the footer of the team page when the practice tab is selected
// ... and the user is interacting with PracticeSelections1 component

export default function NextButton() {
    return (
        <div className="NextButton">
            <button>Next</button> {/* Clicking it needs to take the user to PracticeSelections2*/}
        </div>
    )
}