import Image from "next/image"
import Link from "next/link";
import { getReviewList } from "@/lib/reviews";

import Heading from "@/components/Heading";

export const metadata = {
	title: 'Reviews',
}

//To force rendering in the page
// export const dynamic = 'force-dynamic'

//Background Validation
// export const revalidate = 30 //In seconds


export default async function ReviewsPage() {
	const reviews = await getReviewList(6);
	

	return (
		<>
			<Heading>Reviews</Heading>
			<p>Here will be all the reviews</p>

			<div className="mt-4">
				<ul className="flex flex-wrap gap-3 justify-center">
					{reviews.map((review, index) => (
						<li
							key={review.article}
							className="border w-80 bg-slate-50 rounded shadow hover:shadow-xl min-w-[300px]"
						>
							<Link href={`/reviews/${review.article}`}>
								<Image
									src={review.image}
									alt=""
									width={320}
									height={180}
									priority={index === 0}
									className="rounded-t mb-2 w-[320px] h-[180px] object-cover aspect-video"
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
