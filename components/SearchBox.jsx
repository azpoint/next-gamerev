"use client";
import { Combobox } from "@headlessui/react";
import { useIsClient } from "@/lib/hooks";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox({ reviews }) {
	const router = useRouter();
	const isClient = useIsClient();
	const [query, setQuery] = useState("");

	const handleChange = (review) => {
		router.push(`/reviews/${review.article}`);
	};

	if (!isClient) {
		return null;
	}

	const filtered = reviews.filter((review) => review.title.toLowerCase().includes(query.toLowerCase())).slice(0,5);

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
					{filtered.map((review) => (
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
