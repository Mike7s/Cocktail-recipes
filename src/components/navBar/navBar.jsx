import { Link } from "react-router-dom"
import './navBar.css'
import { IoIosHome } from "react-icons/io"
function NavBar(){
    return(
        <>
        <nav className="navBar">
            <ul>
                <li>  <Link to={"/"}><IoIosHome /></Link> </li>
            </ul>
        </nav>
        </>
    )
}
export default  NavBar