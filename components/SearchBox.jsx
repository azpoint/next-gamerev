"use client";
import { Combobox } from "@headlessui/react";
import { useIsClient } from "@/lib/hooks";
// import { searchReviews } from "@/lib/reviews";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

export default function SearchBox() {
	const router = useRouter();
	const isClient = useIsClient();
	const [query, setQuery] = useState("");
	const [debouncedQuery] = useDebounce(query, 300)
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		//Fetch reviews
		if (debouncedQuery.length > 1) {
			const controller = new AbortController();
			(async () => {
				const url = "/api/search?query=" + encodeURIComponent(debouncedQuery);
				const response = await fetch(url, {
					//Cancel request to api during search typing to prevent data response overlaping
					signal: controller.signal,
				});
				const reviews = await response.json();
				setReviews(reviews);
			})();
			return () => controller.abort();
		} else {
			setReviews([]);
		}
	}, [debouncedQuery]);

	const handleChange = (review) => {
		router.push(`/reviews/${review.article}`);
	};

	if (!isClient) {
		return null;
	}

	//Filter options in memory
	/*
	const filtered = reviews
		.filter((review) =>
			review.title.toLowerCase().includes(query.toLowerCase())
		)
		.slice(0, 5);
	*/

	return (
		<div className="relative w-48">
			<Combobox onChange={handleChange}>
				<Combobox.Input
					placeholder="Search..."
					className="rounded px-2 py-1 bg-slate-100 w-full"
					value={query}
					onChange={(event) => setQuery(event.target.value)}
				/>
				<Combobox.Options className="absolute px-2 pb-1 pt-3 -translate-y-1 w-full bg-slate-100 rounded-b">
					{reviews.map((review) => (
						<Combobox.Option key={review.article} value={review}>
							{({ active }) => (
								<span
									className={`block truncate ${
										active ? "bg-pink-400" : "bg-slate-100"
									} py-0.5 pl-1`}
								>
									{review.title}
								</span>
							)}
						</Combobox.Option>
					))}
				</Combobox.Options>
			</Combobox>
		</div>
	);
}
