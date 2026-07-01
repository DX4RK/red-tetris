import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import type { ReactNode }from "react"

import { getPlayerId } from '@/utils/playerId'

type SocketContextType = {
	socket: Socket | null;
	isConnected: boolean;
};

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const SocketProvider = ({ children }: { children: ReactNode }) => {
	// const { addNotification } = useNotification();
	const [socket, setSocket] = useState<Socket | null>(null);
	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		const newSocket = io("http://localhost:3000", {
			withCredentials: true,
			autoConnect: true,
			auth: {
				playerId: getPlayerId(),
				name: localStorage.getItem("playerName") || null,
			}
		});

		newSocket.connect();

		newSocket.on("connect", () => {
			console.log("✅ Socket connected");
			setIsConnected(true);
		});

		newSocket.on("auth-error", (err) => {
			console.error("❌ Erreur Socket.IO:", err.message);
			setIsConnected(false);
		});

		newSocket.on("connect_error", (err) => {
			console.error("❌ Erreur Socket.IO:", err.message);
			setIsConnected(false);
		});

		newSocket.on("disconnect", () => {
			console.log("❌ Socket disconnected");
			setIsConnected(false);
		});

		setSocket(newSocket);


		return () => {
			newSocket.disconnect();
		};
	}, []);

	return (
		<SocketContext.Provider value={{ socket, isConnected }}>
			{children}
		</SocketContext.Provider>
	);
};

export const useSocket = () => {
	const context = useContext(SocketContext);
	if (!context)
		throw new Error("useSocket must be used within a SocketProvider");
	return context;
};

export function useSocketEvent<T = any>(
	eventName: string,
	callback: (data: T) => void
  ) {
	const { socket, isConnected } = useSocket();

	useEffect(() => {
	  if (!socket || !isConnected) return;

	  socket.on(eventName, callback);

	  return () => {
		socket.off(eventName, callback);
	  };
	}, [socket, isConnected, eventName, callback]);
  }
