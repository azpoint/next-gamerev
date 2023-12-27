import { useState, useEffect } from "react";

export function useFormState(action) {
	const [state, setState] = useState({ loading: false, error: null });
	const handleSubmit = async (event) => {
		event.preventDefault();
		setState({ loading: true, error: null });
		const form = event.currentTarget;
		const formData = new FormData(form);
		const response = await action(formData);
		if (response?.isError) {
			setState({ loading: false, error: response });
		} else {
			form.reset();
			setState({ loading: false, error: null });
		}
	};
	return [state, handleSubmit];
}

export function useIsClient() {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => setIsClient(true), []);
	return isClient;
}
