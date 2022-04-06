function Header() {
  return (
    <div className="flex items-center bg-lime-300">
        <MenuPoint content="Home"/>
        <MenuPoint content="Aufträge"/>
        <MenuPoint content="Kunden"/>
        <MenuPoint content="Mitarbeiter"/>
        <MenuPoint content="Einstellungen"/>
    </div>
  );
}

function MenuPoint(props) {
  return <button className="text-3xl font-medium p-8 px-24 m-2 bg-lime-300 hover:bg-lime-400 rounded-full">{props.content}</button>;
}

export default Header;
