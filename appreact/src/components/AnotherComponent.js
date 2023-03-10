const AnotherComponent = () => {
    const handleClick = () => {
        console.log("Clickou no botao!")
    }

    return (
        <div>
            <p>Segundo componente</p>
            <button onClick={handleClick} >Evento de click</button>
            <hr />
            <button onClick={() => console.log("teste")}>Eveno no Elemento</button>
        </div>
    )
}

export default AnotherComponent