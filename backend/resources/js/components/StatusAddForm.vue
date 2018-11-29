<template>
	<div>
		<form action="/statuses" method="POST" @submit.prevent="doSubmit" @keydown="form.errors.clear()">
			<div>
				<textarea name="body" cols="30" rows="10" v-model="form.body"></textarea>
			</div>

			<div>
				<p v-if="form.errors.any()" v-text="form.errors.get('body')"></p>
			</div>

			<div>
				<button type="submit" :disabled="form.errors.any()">Post Status</button>
			</div>
		</form>
	</div>
</template>

<script>
	import Form from "../library/Form";

	export default {
		data() {
			return {
				form: new Form({
					body: ""
				})
			};
		},

		methods: {
			doSubmit() {
				this.form.post("/statuses").then(status => {
					this.$emit("submitted", status);
				});
			}
		}
	};
</script>
