import './globals.css'
import Navbar from "../components/Navbar";
import { exo2, orbitron } from "./fonts";

export const metadata = {
	title: {
		default: 'Game Rev',
		template: '%s | GameRev'
	}
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
			<body className="flex flex-col px-4 py-2 min-h-screen bg-orange-50">
				<header>
					<Navbar/>
				</header>
				<main className="grow py-3">
					{children}
				</main>
				<footer className="border-t py-3 text-center text-xs text-slate-500">
					Game data and images courtesy of <a href="http://rawg.io" target="_blank" className="text-orange-800 hover:underline">RAWG</a>
				</footer>
			</body>
		</html>
	);
}
