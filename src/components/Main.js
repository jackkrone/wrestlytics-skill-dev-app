// This one will be difficult. It will be the main scrolling area on the screen
// I need

// This component requires a {this.props.children} inside the render


export default function Main(props) {

    return (
        <div className="Main">
            <ul>
                {props.children}
            </ul>
        </div>
    )
}