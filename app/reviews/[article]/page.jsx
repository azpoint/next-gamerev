import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticles } from "@/lib/reviews";
import Heading from "@/components/Heading";
import ShareButtons from "@/components/ShareButtons";
import { getReview } from "@/lib/reviews";

//To force rendering in the page
// export const dynamic = "force-dynamic";

//Background Validation
// export const revalidate = 10 //In seconds


//Function to generate static routes
export async function generateStaticParams() {
	const article = await getArticles();
	return article.map((article) => ({ article }));
}

//Function to generate metadata
export async function generateMetadata({ params: { article } }) {
	const review = await getReview(article);
	if (!review) {
		notFound();
	}
	return {
		title: review.title,
	};
}

export default async function ReviewPage({ params: { article } }) {
	const review = await getReview(article);
	if (!review) {
		notFound();
	}

	return (
		<>
			<Heading>{review.title}</Heading>

			<p className="font-semibold pb-3">{review.subtitle}</p>
			<div className="flex items-baseline gap-3">
				<p className="italic pb-2">{review.date}</p>
				<ShareButtons />
			</div>

			<div className="flex flex-col items-center py-8">
				<Image
					src={review.image}
					alt=""
					width={640}
					height={320}
					priority
					className="rounded mb-2 aspect-video object-cover"
				/>

				<article
					dangerouslySetInnerHTML={{ __html: review.body }}
					className="prose prose-slate max-w-screen-sm"
				/>
			</div>
		</>
	);
}
