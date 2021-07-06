

export default function Nav(props) {
    return (
        <div>
            <h1>{props.navHeader}</h1>
            {props.children /* reason for this is for BurgerMenu or Stopwatch inclusion */}
        </div>
    )
}