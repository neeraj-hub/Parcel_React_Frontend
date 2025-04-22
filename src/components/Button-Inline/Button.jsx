import { useState } from 'react';
import './Button.css';


function Button(){
    const [name, setName] = useState('');
    const [array, setArray] = useState([]);
    const onClick = () => {
        if (name === '') {
            alert('Please enter a name');
            return;
        }
        setArray([...array, name]);
        setName('');
        // console.log(count);
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    }
    return(
        <>  
        <input
        type="text" 
        placeholder="Type something..." 
        onChange={(e) => setName(e.target.value)}
        value={name}
        onKeyDown={handleKeyDown}
        />
            <button className="btn" onClick={onClick}>Submit</button>
            <p>{array.map((name,index) => (
                <li key={index}>{name}</li>
            ))   }</p>
            {/* <button className="btn" onClick={() => setCount(0)}>Reset</button> */}
        </>
        
    )
}

export default Button;