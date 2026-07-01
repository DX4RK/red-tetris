import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function RoomButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
	if (name.trim() === "") return;
	navigate("/rooms", { state: { playerName: name.trim() } });
  };

  return (
	<>
	  <button onClick={() => setOpen(true)}>Multiplayer</button>

	  {open && (
		<div className="" onClick={() => setOpen(false)}>
		  <div onClick={(e) => e.stopPropagation()}
		  >
			<h2>Quel est ton nom ?</h2>
			<input
			  type="text"
			  value={name}
			  onChange={(e) => setName(e.target.value)}
			  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
			  placeholder="Nom du joueur"
			  autoFocus
			  style={{ width: "100%", padding: "0.5rem", margin: "0.75rem 0" }}
			/>
			<div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
			  <button onClick={() => setOpen(false)}>Annuler</button>
			  <button onClick={handleSubmit} disabled={name.trim() === ""}>
				Valider
			  </button>
			</div>
		  </div>
		</div>
	  )}
	</>
  );
}