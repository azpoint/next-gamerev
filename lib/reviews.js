import { readFile, readdir } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";
import qs from "qs";

const CMS_URL = "http://localhost:1337";

export async function getReview(article) {
	const url =
		"http://localhost:1337/api/reviews" +
		"?" +
		qs.stringify(
			{
				filters: { slug: { $eq: article } },
				fields: ["slug", "title", "subtitle", "publishedAt", "body"],
				populate: { image: { fields: ["url"] } },
				sort: ["publishedAt:desc"],
				pagination: { pageSize: 1, withCount: false },
			},
			{ encodeValuesOnly: true }
		);
	const response = await fetch(url);
	const { data } = await await response.json();
	const item = data[0];
	return {
		article: item.attributes.slug,
		title: item.attributes.title,
		date: item.attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
		image: CMS_URL + item.attributes.image.data.attributes.url,
		body: marked(item.attributes.body)
	}
}

export async function getReviewList() {
	const url =
		`${CMS_URL}/api/reviews?` +
		qs.stringify(
			{
				fields: ["slug", "title", "subtitle", "publishedAt"],
				populate: { image: { fields: ["url"] } },
				sort: ["publishedAt:desc"],
				pagination: { pageSize: 6 },
			},
			{ encodeValuesOnly: true }
		);
	const response = await fetch(url);
	const { data } = await response.json();
	return data.map((item) => ({
		article: item.attributes.slug,
		title: item.attributes.title,
		date: item.attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
		image: CMS_URL + item.attributes.image.data.attributes.url,
	}));
}

export async function getArticles() {
	const files = await readdir("./content/reviews");

	return files
		.filter((file) => file.endsWith(".md"))
		.map((file) => file.slice(0, -".md".length));
}
