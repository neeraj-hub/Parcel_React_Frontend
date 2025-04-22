import { Routes, Route, useNavigate } from "react-router-dom";
import Headline from "./components/Headline";

const Home = () =>{
    const navigate = useNavigate();

    return(
        <>
        <h1>Home</h1>
        <button onClick={() => navigate('/headline')}>Go to headline</button> 
        </>
    )
}
const Base = () => {
    return(
        <>
        <h1>Base</h1>
        </>
    )
}
export default function App() {
    return(
        <>
        <h1>Second react app with parcel</h1>
            <Routes>
                <Route path="/" element={<Base />} />
                <Route path="/home" element={<Home />} />
                <Route path="/headline" element={<Headline />} />
            </Routes>        
        </>
        
    )
}