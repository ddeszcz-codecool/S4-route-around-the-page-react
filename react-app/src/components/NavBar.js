import {Link} from "react-router-dom";


const NavBar = () =>{
    return(
        <nav>
            <table>
                <tr><Link to="/">Home</Link></tr>
                <tr><Link to="/about">About</Link></tr>
                <tr><Link to="/contacts">Contacts</Link></tr>
            </table>
        </nav>
    )
}

export default NavBar