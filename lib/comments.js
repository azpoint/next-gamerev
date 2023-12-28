import { db } from "./db";

export async function getComments(article) {
	return await db.comment.findMany({
		where: { slug: article },
		orderBy: { postedAt: "desc" },
	});
}

export async function createComment({ article, user, message }) {
	return await db.comment.create({
		data: {
			slug: article,
			user,
			message,
		},
	});
}
