<template>
	<div>
		<p>The current count is: {{count}}.</p>

		<p>
			<button @click="incrementCounter">Increment</button>
		</p>

		<p>
			<button @click="decrementCounter">Decrement</button>
		</p>
	</div>
</template>

<script>
export default {
	name: 'Counter',

	data() {
		return {
			count: 0
		}
	},

	methods: {
		incrementCounter() {
			this.count += 1;
		},

		decrementCounter() {
			if (this.count === 0)
				return;

			this.count -= 1;
		}
	}
}
</script>

<style>

</style>
