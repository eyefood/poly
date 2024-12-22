<template>
	<div>
		<h1>Welcome to Poly, {{ firstName }}</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "../services/api";
import User from "../models/user";

export default defineComponent({
	data() {
		return {
			firstName: "", // Store the user's first name
		};
	},
	async mounted() {
		try {
			// Fetch user data
			const user: User = await api.fetch<User>(
				"http://api.cagd.localhost/users/hibber02",
			);
			this.firstName = user.firstName;
		} catch (error) {
			console.error("Failed to fetch user data:", error);
		}
	},
});
</script>
