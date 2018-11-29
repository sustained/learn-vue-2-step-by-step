<template>
	<div>
		<div v-for="(reply, index) in items" :key="'reply' + index">
			<reply :data="reply" @deleted="remove(index)"></reply>
		</div>

		<!-- <new-reply :endpoint="endpoint" @created="add"></new-reply> -->
	</div>
</template>

<script>
	import Reply from "./Reply";
	// import NewReply from "./NewReply";
	import Collection from "./Collection";

	export default Collection.extend({
		components: { Reply },

		data() {
			return {
				endpoint: location.pathname + "/replies"
			};
		}
	});
</script>
