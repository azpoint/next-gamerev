import Image from "next/image";
import Link from "next/link";
import { getReviewList } from "@/lib/reviews";

import Heading from "@/components/Heading";

//To force rendering in the page
export const dynamic = 'force-dynamic'

export default async function HomePage() {
	const lastReviews = await getReviewList(3);
	console.log(
	lastReviews.map(review => review.article).join(', '))


	return (
		<>
			<Heading>GameRev</Heading>
			<p className="pb-3">My personal video game choices</p>

			<ul className="flex flex-col gap-4 items-center">
				{lastReviews.map((review, index) => (
					<li
						key={review.article}
						className="border bg-slate-50 w-80 sm:w-full rounded shadow hover:shadow-xl"
					>
						<Link
							href={`/reviews/${review.article}`}
							className="flex flex-col sm:flex-row"
						>
							<Image
								src={review.image}
								alt={review.title}
								width={320}
								height={180}
								priority={index === 0}
								className="rounded-t sm:rounded-l sm:rounded-r-none w-[320px] h-[180px] object-cover aspect-video"
							/>

							<div className="font-orbitron text-center flex flex-col gap-4 p-4 w-full sm:flex-row sm:items-center sm:text-left">
								<h2 className="font-semibold text-2xl sm:w-1/3">
									{review.title}
								</h2>
								<div className="h-full bg-slate-400 w-[1px] hidden sm:block"></div>
								<p className="text-md sm:w-1/2">{review.subtitle}</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
