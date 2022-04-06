function Contract(props){

    return (
        <div className="text-center text-xl border-2 rounded-lg hover:bg-zinc-400">
            <h1>{ props.name }</h1>
            <h2>{ props.adress }</h2>
            <p>{ props.description }</p>
            <h2>{ props.startdate }</h2>
            <h2>{ props.enddate }</h2>
        </div>
    )
}

export default Contract;