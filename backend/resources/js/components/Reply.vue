<template>
	<div>
		<p>{{ reply.content }}</p>
	</div>
</template>

<script>
	export default {
		props: ["data"],

		data() {
			return {
				reply: this.data
			};
		}
	};
</script>
