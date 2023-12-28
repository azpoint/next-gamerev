import { UserCircleIcon } from "@heroicons/react/24/outline";

export default async function CommentsListSkeleton() {
	

	return (
		<ul className="border mt-3 rounded animate-pulse">
			{[1,2,3].map((index) => (
				<li
					key={index}
					className="border-b px-3 py-2 last:border-none odd:bg-slate-200"
				>
					<div className="flex gap-3 pb-1 text-slate- items-center text-slate-400">
						<UserCircleIcon className="h-6 w-6" />
						<div className="bg-slate-400 rounded h-3 w-24"></div>
					</div>
					<div className="bg-slate-400 rounded h-3 w-22/3 my-2"></div>
				</li>
			))}
		</ul>
	);
}
