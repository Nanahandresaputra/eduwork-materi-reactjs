import { useState } from "react";

let FunctionalCOmponent = ({nama}) => {
    // membuata state di functional component sebenarnya tidak bisa namun bisa dengan cara hook dan pembuatan state 
    // di class component dan di functional component tidak sama atau berbeda

    const [value, setValue] = useState(0);
    let handlePlus = () =>{
        setValue(value + 1);
    }
    let handleMinus = () =>{ 
       if(value > 0) {setValue(value - 1);}
    }


    return(
        <div>
            <h1>Membuat FunctionalCOmponent</h1>
            <h2>selamat belajar {nama}</h2>
            <button onClick={handleMinus}>-</button>
            <span>{' '}{value}{' '}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}
// menambahkan default props
FunctionalCOmponent.defaultProps = {nama: 'user'}
export  default FunctionalCOmponent;