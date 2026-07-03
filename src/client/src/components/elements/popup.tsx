import { useState } from "react";
import { useNavigate } from "react-router-dom";



export function Popup () {
	return (
		
		<div className="flex items-center justify-center">
	{!open && <button
			className="bg-red-600 px-8 py-3 font-(family-name:--martian) text-lg font-semibold text-white hover:bg-red-700 outline-4 outine-red-100">
			Jouer
		</button>
	}

		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl">

		
		<input 
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
			type="text"
			autoFocus
			// value={input}
            // onChange={(e) => setInput(e.target.value)}
			placeholder="Enter your name"
			onKeyDown={(e) => e.key === "Enter" && confirm()}
			>
		</input>
		</div>
		<button
        	className="bg-black-600 px-8 py-3 text-lg font-semibold text-white hover:bg-red-700 outline-4 outine-red-600"
            // onClick={() => setOpen(false)} 
			> Annuler
		</button>
	</div>
	</div>
);
}