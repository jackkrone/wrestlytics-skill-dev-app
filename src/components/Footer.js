// The footer's main rendering job is to render it's children


export default const Footer = (props) => {
    return (
        <div className="Footer">
            {props.children}
        </div>
    )
}