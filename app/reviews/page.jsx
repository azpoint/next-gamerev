import Link from "next/link";
import { getReviewList } from "@/lib/reviews";

import Heading from "@/components/Heading";

export default async function ReviewsPage() {
	const reviews = await getReviewList();
	return (
		<>
			<Heading>Reviews</Heading>
			<p>Here will be all the reviews</p>

			<div className="mt-4">
				<ul className="flex flex-wrap gap-3">
					{reviews.map((review) => (
						<li
							key={review.article}
							className="border w-80 bg-slate-50 rounded shadow hover:shadow-xl"
						>
							<Link href={`/reviews/${review.article}`}>
								<img
									src={review.image}
									alt=""
									width={320}
									className="rounded-t mb-2"
								/>
								<h2 className="py-1 text-center font-orbitron font-semibold">
									{review.title}
								</h2>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
