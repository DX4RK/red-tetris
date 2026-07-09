interface PopupProps {
	isOpen: boolean;
	value: string;
	onChange: (value: string) => void;
	onConfirm: () => void;
	onCancel: () => void;
}

export function Popup({ isOpen, value, onChange, onConfirm, onCancel }: PopupProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
			<div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl flex flex-col gap-4">
				<input
					className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
					type="text"
					autoFocus
					value={value}
					onChange={(e) => onChange(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") onConfirm();
					}}
					placeholder="Enter your name"
				/>
				<div className="flex gap-3 justify-end">
					<button
						className="bg-black px-6 py-2 text-lg font-semibold text-white hover:bg-gray-800"
						onClick={onCancel}
					>
						Annuler
					</button>
					<button
						className="bg-red-600 px-6 py-2 font-semibold text-white hover:bg-red-700"
						onClick={onConfirm}
					>
						Confirmer
					</button>
				</div>
			</div>
		</div>
	);
}
