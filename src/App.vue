<template>
	<div id="app">
		<transition name="fade" mode="out-in">
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
		</transition>
		<transition name="fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
		
	</div>
</template>

<script>

</script>

<style>
html {
	font-size: 62.5%;
}
#app {
	margin-bottom: 6rem;
	font-size: 16px;
}
</style>