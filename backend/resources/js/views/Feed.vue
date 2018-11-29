<template>
	<div>
		<h2>Statuses</h2>

		<status-add-form @submitted="updateFeedWithPost"></status-add-form>

		<div v-for="status in statuses" :key="'status-' + status.id">
			<h3>{{ status.user.name }} said...</h3>
			<p>
				<small>{{ status.created_at | relative }}</small>
			</p>

			<p>{{ status.body }}</p>

			<hr>
		</div>
	</div>
</template>

<script>
	import moment from "moment";

	import StatusAddForm from "../components/StatusAddForm";

	export default {
		components: {
			StatusAddForm
		},

		data() {
			return {
				statuses: []
			};
		},

		methods: {
			updateFeedWithPost(status) {
				this.statuses.unshift(status);

				window.scrollTo(0, 0);
			}
		},

		filters: {
			relative(timestamp) {
				return moment(timestamp).fromNow();
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
