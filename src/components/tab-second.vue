<template>
	<Row class="tab-second">
		<Col span="4" v-for="(item, index) in arr" :key="index">
			<router-link :to="item.url" tag="div" class="tab-second-item">
				<i class="icon iconfont" :class="item.iconClass"></i>
				<span>{{ item.title }}</span>
			</router-link>
		</Col>
    </Row>
</template>
<script>
export default {
	data(){
		return {
			class: '',
			arr: [
				{ title: '电影', type: 'movie' ,url: '/audio/movie'},
				{ title: '读书', type: 'read' ,url: '/audio/read'},
				{ title: '电视', type: 'tv' ,url: '/audio/tv'},
				{ title: '同城', type: 'city' ,url: '/audio/city'},
				{ title: '音乐', type: 'music' ,url: '/audio/music'},
				{ title: '市集', type: 'market' ,url: '/audio/market'},
			]
		}
	},

}	
</script>
<style>
 .tab-second {
	position: fixed;
	width: 100%;
	top: 6rem;
	background: #fff;
	z-index: 1000;
	font-size: 12px;
	color: #696969;	
}
.tab-second-item {
	width: 100%;
	height: 4rem;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid #fff;
}
.tab-second .router-link-active {
	border-bottom: 2px solid #19be6b;
}

</style>