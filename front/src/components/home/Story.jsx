

export function Story({name, source}) {

    return (
        <div>
        <div className="story">
            <img src={source} alt={name} />
        </div>
        <h3>{name}</h3>
        </div>
    )
}