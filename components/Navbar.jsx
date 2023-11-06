import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="container mx-auto">
			<ul className="flex gap-2 font-sans">
				<li>
					<Link href="/" className="text-rose-700 hover:underline font-orbitron font-bold">GameRev</Link>
				</li>
				<li className="ml-auto">
					<Link href="/reviews" className="text-rose-700 hover:underline">Reviews</Link>
				</li>
				<li>
					<Link href="/about" prefetch={false} className="text-rose-700 hover:underline">
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
}
