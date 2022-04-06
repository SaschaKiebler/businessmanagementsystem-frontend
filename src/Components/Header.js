import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex items-center bg-lime-300 w-full justify-around">
      <Link to="/">
        <MenuPoint content="Home" />
      </Link>
      <Link to="/auftraege">
        <MenuPoint content="Aufträge" />
      </Link>
      <Link to="/kunden">
        <MenuPoint content="Kunden" />
      </Link>
      <Link to="/mitarbeiter">
        <MenuPoint content="Mitarbeiter" />
      </Link>
      <Link to="/einstellungen">
        <MenuPoint content="Einstellungen" />
      </Link>
    </nav>
  );
}

function MenuPoint(props) {
  return (
    <button className="text-3xl font-medium p-4 px-24 m-auto bg-lime-300 hover:bg-lime-400 rounded-full">
      <h1>{props.content}</h1>
    </button>
  );
}

export default Header;
