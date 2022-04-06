function Contract(props){

    return (
        <button className="text-center text-xl border-2 w-full rounded-lg hover:bg-zinc-400">
            <h1>{ props.name }</h1>
            <h2>{ props.adress }</h2>
            <p>{ props.description }</p>
            <h2>{ props.startdate }</h2>
            <h2>{ props.enddate }</h2>
        </button>
    )
}

export default Contract;