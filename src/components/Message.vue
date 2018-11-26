<template>
	<div class="box is-info">
		<slot/>
	</div>
</template>

<script>
export default {
	name: 'Message'
}
</script>

<style>
div.box {
	background: #161616;
	color: #e4e4e4;
	padding: 1em;
	border: 1px solid #000000;
	margin-bottom: 10px;
}
</style>
