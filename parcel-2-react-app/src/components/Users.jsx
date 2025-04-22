import { useParams } from "react-router-dom";

function Users() {
    const {userId} = useParams();
    return ( 
        <>
            <h1>Users Page {userId}</h1>
            <p>This is the users page.</p>
        </>
     );
}

export default Users;