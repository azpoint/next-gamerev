import Link from "next/link";

export default function ReviewsLayout({ children }) {
	return (
		<div>
			<div>
				<ul>
					<li>
						<Link href="/reviews/gran-turismo">Gran Turismo</Link>
					</li>
					<li>
						<Link href="/reviews/forza-motorsport">Forza Motorsport</Link>
					</li>
					<li>
						<Link href="/reviews/halo">Halo</Link>
					</li>
				</ul>
			</div>
			{children}
		</div>
	);
}
