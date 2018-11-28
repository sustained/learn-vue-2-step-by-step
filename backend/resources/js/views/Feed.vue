<template>
	<div>
		<h2>Statuses</h2>

		<div v-for="status in statuses" :key="'status-' + status.id">
			<h3>{{ status.user.name }} said...</h3>
			<p>
				<small>{{ postedAt(status) }}</small>
			</p>

			<p>{{ status.body }}</p>

			<hr>
		</div>
	</div>
</template>

<script>
	import moment from "moment";

	export default {
		data() {
			return {
				statuses: []
			};
		},

		methods: {
			postedAt(status) {
				return moment(status.created_at).fromNow();
			}
		},

		mounted() {
			console.log("Home component mounted.");
		},

		created() {
			console.log("Home component created.");

			axios.get("/statuses").then(({ data }) => (this.statuses = data));
		}
	};
</script>
