import Link from "next/link";
import { getReviewList } from "@/lib/reviews-local";

import Heading from "@/components/Heading";

export default async function HomePage() {
	let lastReview = await getReviewList()
	lastReview = lastReview[0]

	return (
		<>
			<Heading>GameRev</Heading>
			<p className="pb-3">My personal video game choices</p>

			<div className="border bg-slate-50 w-80 sm:w-full rounded shadow hover:shadow-xl">
				<Link href={`/reviews/${lastReview.article}`} className="flex flex-col sm:flex-row">
					<img
						src={lastReview.image}
						alt={lastReview.title}
						width={320}
						className="rounded-t sm:rounded-l sm:rounded-r-none"
					/>
					<h2 className="py-1 font-orbitron font-semibold text-center sm:pl-8 sm:text-2xl sm:items-center sm:flex">
						{lastReview.title}
					</h2>
				</Link>
			</div>
		</>
	);
}
