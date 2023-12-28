"use client";

import { createCommentAction } from "@/app/reviews/[article]/actions";
import { useState } from "react";


export default function CommentForm({ title, article }) {
	const [state, setState] = useState({ loading: false, error: null });

	const handleSubmit = async (event) => {
		event.preventDefault();
		setState({ loading: true, error: null });
		const form = event.currentTarget;
		const formData = new FormData(form);
		const response = await createCommentAction(formData);
		if (response?.isError) {
			setState({ loading: false, error: response });
		} else {
			form.reset();
			setState({ loading: false, error: null });
		}
	};

	return (
		<form
			// action={createCommentAction} //this is for inline server action!!!
			onSubmit={handleSubmit} //This is for client server action!!!
			className="border bg-white flex flex-col gap-2 mt-3 px-3 py-3 rounded"
		>
			<p className="pb-1">
				Already played <strong>{title}</strong>? Have your say!
			</p>

			{/* Pass info to the server action */}
			<input type="hidden" name="article" value={article} />
			{/* Pass info to the server action */}

			<div className="flex">
				<label htmlFor="userField" className="shrink-0 w-32">
					Your name
				</label>
				<input
					id="userField"
					className="border px-2 py-1 rounded w-48"
					name="user"
					// required
					maxLength={15}
				/>
			</div>
			<div className="flex">
				<label htmlFor="messageField" className="shrink-0 w-32">
					Your comment
				</label>
				<textarea
					id="messageField"
					className="border px-2 py-1 rounded w-full"
					name="message"
					maxLength={500}
					// required
				/>
			</div>
			{Boolean(state.error) && (
				<p className="text-red-700">{state.error.message}</p>
			)}
			<button
				type="submit"
				disabled={state.loading}
				className="bg-orange-800 rounded px-2 py-1 self-center
					 text-slate-50 w-32 hover:bg-orange-700 disabled:bg-slate-500
					 disabled:cursor-not-allowed"
			>
				Submit
			</button>
		</form>
	);
}
 