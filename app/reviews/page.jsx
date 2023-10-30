import Link from "next/link";

import Heading from "@/components/Heading";

export default function ReviewsPage() {
	return (
		<>
			<Heading>Reviews</Heading>
			<p>Here will be all the reviews</p>

			<div className="mt-4">
				<ul className="flex gap-3">
					<li className="border w-80 bg-slate-50 rounded shadow hover:shadow-xl">
						<Link href="/reviews/gran-turismo-7">
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
						<Link href="/reviews/halo-infinite">
						<img src="/images/halo-infinite.webp" alt="" width={320} className="rounded-t mb-2"/>
						<h2 className="py-1 text-center font-orbitron font-semibold">Halo Infinite</h2>
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
