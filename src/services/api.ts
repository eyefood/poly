type FetchOptions = Omit<RequestInit, "headers"> & {
	headers?: Record<string, string>;
};

// Encode credentials (username and password)
const username = "hibber02"; // Replace with actual username
const password = "bxi_5013"; // Replace with actual password
const credentials = btoa(`${username}:${password}`);

// Define the API utility
const api = {
	async fetch<T>(url: string, options: FetchOptions = {}): Promise<T> {
		// Default headers with authentication
		const defaultHeaders: Record<string, string> = {
			Authorization: `Basic ${credentials}`,
			"Content-Type": "application/json", // Adjust based on API requirements
		};

		// Merge default headers with user-provided headers
		const headers = {
			...defaultHeaders,
			...(options.headers || {}),
		};

		// Perform the fetch request
		const response = await fetch(url, {
			...options,
			headers,
		});

		// Handle errors or return the response
		if (!response.ok) {
			const error = new Error(`HTTP error! Status: ${response.status}`);
			(error as any).response = response; // Attach response for debugging
			throw error;
		}

		return response.json() as Promise<T>; // Assume JSON response, with generic type T
	},
};

export default api;
