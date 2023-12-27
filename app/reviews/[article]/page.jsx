import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticles } from "@/lib/reviews";
import Heading from "@/components/Heading";
import ShareButtons from "@/components/ShareButtons";
import { getReview } from "@/lib/reviews";
import { ChatBubbleBottomCenterTextIcon} from '@heroicons/react/24/outline'
import CommentList from "@/components/CommentList";
import CommentForm from "@/components/CommentForm";
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

				<section className="border-dashed border-t max-w-screen-sm mt-3 py-3">
					<h2 className="font-bold flex gap-2 items-center text-xl">
						<ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
						Comments
					</h2>
					<CommentForm article={article} title={review.title}/>
					<CommentList article={article}/>
				</section>
			</div>
		</>
	);
}
