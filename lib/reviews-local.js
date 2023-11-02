import { readFile, readdir } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";


export async function getReview(article) {
	const text = await readFile(`./content/reviews/${article}.md`, "utf-8");
	const {
		content,
		data: { title, date, image },
	} = matter(text);
	const body = marked(content);
	return { article, title, date, image, body };
}

export async function getReviewList() {
	const articles = await getArticles();

	const reviews = [];
	for (const article of articles) {
		const review = await getReview(article);
		reviews.push(review);
	}
	//Sort articles by date
	reviews.sort((a,b) => b.date.localeCompare(a.date))
	return reviews;
}

export async function getArticles() {
	const files = await readdir("./content/reviews");

	return files
		.filter((file) => file.endsWith(".md"))
		.map((file) => file.slice(0, -".md".length));
}
