import { NavLink } from "react-router-dom";
import './index.css';
function navlinkstyling({isActive}){
    return {
        color: isActive ? 'red' : 'blue',
        textDecoration: isActive ? 'underline' : 'none',
        fontSize: isActive ? '20px' : '16px',
        fontWeight: isActive ? 'bold' : 'normal',
    }
}
export default function NavBar(){
    return (
        <>
        <nav className="navbar">
            <NavLink to='home' style={navlinkstyling}>Home</NavLink>
            <NavLink to='about' style={navlinkstyling} >About</NavLink>
            <NavLink to='products' style={navlinkstyling} >Products</NavLink>
            <NavLink to='users' style={navlinkstyling} >Users</NavLink>
        </nav>  
        </>
    )
}