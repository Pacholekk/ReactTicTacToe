import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setisEditing] = useState(false);
  function handleClick() {
    setisEditing((prevState) => !prevState);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let editPlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{btnCaption}</button>
      </span>
    </li>
  );
}
