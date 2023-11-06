import Image from "next/image";
import Link from "next/link";
import { getReviewList, getSearchReviews } from "@/lib/reviews";

import Heading from "@/components/Heading";
import PaginationBar from "@/components/PaginationBar";
import SearchBox from "@/components/SearchBox";

export const metadata = {
	title: "Reviews",
};

const PAGE_SIZE = 6;

//To force rendering in the page
// export const dynamic = 'force-dynamic'

//Background Validation
// export const revalidate = 30 //In seconds

export default async function ReviewsPage({ searchParams }) {
	const page = parsePageParam(searchParams.page);

	const { reviews, pageCount } = await getReviewList(PAGE_SIZE, page);
	const searchableReviews = await getSearchReviews();

	// console.log("Reviews: ", reviews.map(({article, title}) => ({article, title})))

	return (
		<>
			<Heading>Reviews</Heading>

			<div className="flex justify-between">
				<PaginationBar page={page} pageCount={pageCount} href={"/reviews"} />
				<SearchBox reviews={searchableReviews} />
			</div>

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
								<h2 className="my-3 py-0 font-orbitron font-semibold text-center">
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

function parsePageParam(paramValue) {
	if (paramValue) {
		const page = parseInt(paramValue);
		if (isFinite(page) && page > 0) {
			return page;
		}
	}
	return 1;
}
