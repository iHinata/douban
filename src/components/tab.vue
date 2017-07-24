<template>
    <Row class="tab">
		<Col span="6" v-for="(item, index) in arr" :key="index">
			<router-link :to="item.link" tag="div" class="tab-item">
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
			arr: [
				{ title: '首页', link: '/home', iconClass: 'icon-shouye' },
				{ title: '影音', link: '/audio/movie', iconClass: 'icon-yuleyingyin' },
				{ title: '小组', link: '/group', iconClass: 'icon-xiaozu' },
				{ title: '我的', link: '/user', iconClass: 'icon-wo' },
			]
		}
	},

}	
</script>
<style>
.tab {
	position: fixed;
	width: 100%;
	background: #fff;
	z-index: 1000;
	font-size: 12px;
	color: #696969;
	bottom: 0;
	left: 0;	
}
.tab-item {
	width: 100%;
	height: 6rem;
	border-top: #eee 1px solid;
	display: flex;
	box-sizing: border-box;
	padding: 0.5rem 0;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.tab-item .iconfont {
	font-size: 24px;
}
.tab .router-link-active {
	color: #19be6b;
}
</style>