import Heading from "@/components/Heading";
import ShareButtons from "@/components/ShareButtons";
import { getReview, getArticles } from "@/lib/reviews";

//Function to generate static routes
export async function generateStaticParams() {
	const article = await getArticles();
	return article.map((article) => ({ article }));
}

//Function to generate metadata
export async function generateMetadata({ params: { article } }) {
	const review = await getReview(article);
	return {
		title: review.title,
	};
}

export default async function ReviewPage({ params: { article } }) {
	const review = await getReview(article);

	return (
		<>
			<Heading>{review.title}</Heading>

			<div className="flex items-baseline gap-3">
				<p className="italic pb-2">{review.date}</p>
				<ShareButtons />
			</div>

			<img src={review.image} alt="" width={640} className="rounded mb-2" />

			<article
				dangerouslySetInnerHTML={{ __html: review.body }}
				className="prose prose-slate max-w-screen-sm"
			/>
		</>
	);
}
