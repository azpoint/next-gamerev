import { marked } from "marked";
import qs from "qs";

const CMS_URL = "http://localhost:1337";
export const CACHE_TAG_REVIEWS = 'reviews'

export async function getReview(article) {
	const { data } = await fetchReviews({
		filters: { slug: { $eq: article } },
		fields: ["slug", "title", "subtitle", "publishedAt", "body"],
		populate: { image: { fields: ["url"] } },
		sort: ["publishedAt:desc"],
		pagination: { pageSize: 1, withCount: false },
	});
	if (data.length === 0) {
		return null
	}
	const item = data[0];
	return {
		...toReview(item),
		body: marked(item.attributes.body),
	};
}

export async function getReviewList(pageSize) {
	const { data } = await fetchReviews({
		fields: ["slug", "title", "subtitle", "publishedAt"],
		populate: { image: { fields: ["url"] } },
		sort: ["publishedAt:desc"],
		pagination: { pageSize },
	});
	return data.map(toReview);
}

// export async function getArticles() {
// 	const files = await readdir("./content/reviews");

// 	return files
// 		.filter((file) => file.endsWith(".md"))
// 		.map((file) => file.slice(0, -".md".length));
// }

export async function getArticles() {
	const { data } = await fetchReviews({
		fields: ["slug"],
		sort: ["publishedAt:desc"],
		pagination: { pageSize: 100 },
	})
	return data.map(item => item.attributes.slug)
}


async function fetchReviews(parameters) {
	const url =
		`${CMS_URL}/api/reviews?` +
		qs.stringify(parameters, { encodeValuesOnly: true });
	const response = await fetch(url, {
		// cache: 'no-cache'
		next: {
			tags: [CACHE_TAG_REVIEWS]
		}
	});
	if (!response.ok) {
		throw new Error(`CMS returned ${response.status} for ${url}`);
	}
	return await response.json();
}

function toReview(item) {
	return {
		article: item.attributes.slug,
		title: item.attributes.title,
		subtitle: item.attributes.subtitle,
		date: item.attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
		image: CMS_URL + item.attributes.image.data.attributes.url,
	};
}
