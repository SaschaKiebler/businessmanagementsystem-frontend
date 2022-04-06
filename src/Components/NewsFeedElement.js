
function NewsFeedElement(props){
    return (
        <div className="text-center text-xl border-2 rounded-lg hover:bg-zinc-400">
          <h1>{props.name}</h1>
          <h2>{props.type}</h2>
          <p>{props.description}</p>
          <h2>{props.date}</h2>
        </div>
      );
}

export default NewsFeedElement;