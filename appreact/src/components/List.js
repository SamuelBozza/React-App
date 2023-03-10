const List = () => {
    const items = [{
        id: 1,
        name: "Samuel"
    }, {
        id: 2,
        name: "Matheus"
    }, {
        id: 3,
        name: "Joao"
    }]
    return (
        <div>
            {items.map((item) => (
                <p key={item.id}>
                    {item.id} - {item.name}
                </p>
            ))}
        </div>
    )
}

export default List;