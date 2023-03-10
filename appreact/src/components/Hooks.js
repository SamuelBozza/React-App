import { useState, useEffect } from "react";

const Hooks = () => {
    let idade = 30;
    const [novaIdade, setNovaIdade] = useState(40 )

    const changeage = () => {
        idade = 31;
        console.log(idade);
    }

    const changeNewAge = () => {
        setNovaIdade(55);
    }

    useEffect(() => {
        console.log("Testando")
    });

    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeage} >Mudar idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge} >Mudar nova idade</button>
        </div>
    )
}

export default Hooks