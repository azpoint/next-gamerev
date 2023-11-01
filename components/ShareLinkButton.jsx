'use client'
import { useState } from "react";
import { LinkIcon } from '@heroicons/react/20/solid'

export default function ShareLinkButton() {
	const [clicked, setClicked] = useState(false)

	const handleClick = () => {
		//Copy the url to clipboard
		navigator.clipboard.writeText(window.location.href)

		setClicked(true)
		setTimeout(() => {
			setClicked(false)
		}, 3000);
	}


	return (
		<button onClick={handleClick}
			className="flex gap-2 items-center border px-2 py-1 rounded text-slate-500 text-sm hover:text-orange-800 hover:shadow-md hover:bg-orange-300"
		>
			<LinkIcon className="h-4 w-4 text-blue-600"/>
			{clicked ? 'Link Copied!' : 'Share Link'}
		</button>
	);
}
