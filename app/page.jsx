import Link from "next/link";
import Heading from "@/components/Heading";

export default function HomePage() {
	return (
		<>
			<Heading>GameRev</Heading>
			<p className="pb-3">My personal video game choices</p>

			<div className="border bg-slate-50 w-80 sm:w-full rounded shadow hover:shadow-xl">
				<Link href="/reviews/halo" className="flex flex-col sm:flex-row">
					<img
						src="/images/halo-infinite.webp"
						alt=""
						width={320}
						className="rounded-t sm:rounded-l sm:rounded-r-none"
					/>
					<h2 className="py-1 text-center font-orbitron font-semibold sm:px-2">
						Halo Infinite
					</h2>
				</Link>
			</div>
		</>
	);
}
