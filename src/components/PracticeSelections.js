// This component 


export default function PracticeSelections() {
    return (
        <div className="PracticeSelections">
                <li><button>Choose Athlete</button></li> {/* future: format as dropdown list */}
                <li><button>Add Athlete +</button></li> {/* onClick, add an additional instance of li1 */}
                <br/>
                <li><button>Choose Technique</button></li> {/* future: format as dropdown list */}
                <li><button>Add Technique +</button></li> {/* onClick, add an additional instance of li3 */}
        </div>
    )
}