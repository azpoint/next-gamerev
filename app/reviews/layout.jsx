import Link from "next/link";

export default function ReviewsLayout({ children }) {
	return (
		<div>
			{children}
			<div className="mt-4">
				<ul className="flex gap-3">
					<li className="border w-80 bg-slate-50 rounded shadow hover:shadow-xl">
						<Link href="/reviews/gran-turismo">
						<img src="/images/gran-turismo-7.avif" alt="" width={320} className="rounded-t mb-2"/>
							<h2 className="py-1 text-center font-orbitron font-semibold">Gran Turismo</h2>
							</Link>
					</li>
					<li className="border w-80 bg-slate-50 rounded shadow hover:shadow-xl">
						<Link href="/reviews/forza-motorsport">
						<img src="/images/forza-motorsport.webp" alt="" width={320} className="rounded-t mb-2"/>
						<h2 className="py-1 text-center font-orbitron font-semibold">Forza Motorsport</h2>
							</Link>
					</li>
					<li className="border w-80 bg-slate-50 rounded shadow hover:shadow-xl">
						<Link href="/reviews/halo">
						<img src="/images/halo-infinite.webp" alt="" width={320} className="rounded-t mb-2"/>
						<h2 className="py-1 text-center font-orbitron font-semibold">Halo Infinite</h2>
						</Link>
					</li>
				</ul>
			</div>
			
		</div>
	);
}
