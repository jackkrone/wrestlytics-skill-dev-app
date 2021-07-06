/*
This page appears after the coach signs in, shows the coach's team and tabs for
tracking and practicing
*/
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
// Also import BurgerMenu, CompareButton, and BeginButton once created


export default function Team(props) {
    /* need some logic here before return statement regarding what var to pass 
    to Main and to footer, e.g.:
    if () {const mainVar = }
    if () {const footerVar =}
    
    */
    return (
        <div className="Team">
            <Header title={props.teamName} >
                <Menu />
            </Header>
            <SubHeader/>
            <Main>
                <br/>
                {props.athletes.map(ath => <li><button>{ath}</button></li>)}
            </Main>
            <Footer>
                {/* Button for Begin or Compare */}
                <br />
                <button>Compare</button>
            </Footer>
        </div>
    )
}