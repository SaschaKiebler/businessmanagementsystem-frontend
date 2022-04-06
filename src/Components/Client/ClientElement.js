

export default function ClientElement(props){

    return(
        <button className="text-center text-xl border-2 w-full rounded-lg hover:bg-zinc-400">
            <h1>{props.firstName} {props.lastName}</h1>
            <p>{props.dob}</p>
            </button>
            )
}