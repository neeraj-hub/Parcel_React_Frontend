import { Link, Outlet } from "react-router-dom";
function Products() {
    return ( 
        <>
        <nav>
            <Link to='featured' className='featured'>Featured</Link>
            <Link to='new' className='new'>New</Link>
        </nav>
        <Outlet />
        </>
     );
}

export default Products;