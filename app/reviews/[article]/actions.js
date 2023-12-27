"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createComment } from "@/lib/comments";

export async function createCommentAction(formData) {
	const data = {
		article: formData.get("article"),
		user: formData.get("user"),
		message: formData.get("message"),
	};

	const error = validate(data);

	if (error) return { isError: true, message: error };

	const message = await createComment(data);
	revalidatePath(`/reviews/${data.article}`);
	redirect(`/reviews/${data.article}`);
}

function validate(data) {
	if (!data.user) return "Name field is required";

	if (data.user.length > 50)
		return "Name field cannot be longer than 15 characters";

	if (!data.message) return "Comment field is required";

	if (data.message.length > 500)
		return "Comment cannot be longer than 500 characters";
}
