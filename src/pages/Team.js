/*
This page appears after the coach signs in, shows the coach's team and tabs for
tracking and practicing
*/
import Nav from '../components/Nav';
import SubNav from '../components/SubNav';
import Main from '../components/Main';
import Footer from '../components/Main';
// Also import BurgerMenu, CompareButton, and BeginButton once created


// example athlete array, this is just to see if the athletes render correctly
const athletes = ['charlie', 'emma', 'will', 'sarah']



export const Team = (props) => {
    /* need some logic here before return statement regarding what var to pass 
    to Main and to footer, e.g.:
    if () {const mainVar = }
    if () {const footerVar =}
    
    */
    return (
        <div className=Team>
            <Nav>
                {/* <BurgerMenu /> */}
            </Nav>
            <SubNav/>
            <Main>
                {athletes}
            </Main>
            <Footer>
                {/* Button for Begin or Compare */}
            </Footer>
        </div>
    )
}