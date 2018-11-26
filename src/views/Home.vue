<template>
	<div>
		<Message>I am a box.</Message>

		<Message>Me too.</Message>

		<Counter></Counter>
	</div>
</template>

<script>
// @ is an alias to /src
import Message from '@/components/Message.vue'
import Counter from '@/components/Counter.vue'

export default {
	name: 'home',
	components: {
		// eslint-disable-next-line
		Message, Counter
	}
}
</script>
