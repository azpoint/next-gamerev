import Heading from "../../components/Heading";


export const metadata = {
	title: 'About',
}

export default function About({ children }) {
	return (
		<>
			<Heading>About</Heading>
			<p>Simple static webpage to learn NextJS</p>
		</>
	);
}
