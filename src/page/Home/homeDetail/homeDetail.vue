<template>
    <div class="home-detail">
        <mhead>
            <i class="icon iconfont icon-fanhui" slot="back" @click="back"></i>
            <p class="title" slot="text">推荐</p>
            <i class="icon iconfont icon-fenxiang" slot="icon"></i>
        </mhead>
        <div class="home-detail-container">
            <img :src="cur.image" alt="" class="photo">
            <p class="time">时间：{{ cur.begin_time }}</p>
            <p class="adress">地点：{{ cur.loc_name }}</p>
            <p class="type">类型：{{ cur.category_name }}</p>
            <p>详情：</p>  
            <div v-html="cur.content" class="detail-cont"></div>
        </div>
    </div>
</template>

<script>
import mhead from '@/components/mhead'
import { mapState } from 'vuex'

export default {
    components: {
        mhead,
    },
    data(){
        return {
            cur: {},
        }
    },
    computed: {
        ...mapState({
            homeDetail: state => state.home.home,
        })
    },
    mounted(){
        this.chooseHomeId();     
    },
    methods: {
        // 从homeDetail跳转到主页面
        back(){
            this.$router.push('/home')
        },
        // 根据当前路由参数homeId 遍历原数组，选定当前点击的数组元素
        chooseHomeId(){
            var homeId = this.$route.params.homeId
            for( var i in this.homeDetail){
                if(this.homeDetail[i].id == homeId){
                    this.cur = this.homeDetail[i] 
                    console.log(this.cur)
                    return 
                }
            }
        }
    }
}
</script>

<style>

.home-detail .mhead {
    border: none; 
    display: flex;
    justify-content: center;
    color: #333;
    position: fixed;
    width: 100%;
    top: 0;
    background: #fff;
    z-index: 1000;
}
.detail-content {
    padding: 0 1.5rem;
}
.mhead .iconfont {
    font-size: 24px;
}
.home-detail .icon-fanhui {
    position: absolute;
    left: -1.5rem;

}
.home-detail .icon-fenxiang {
    position: absolute;
    right: 1.5rem;
}

.home-detail-container {
    position: relative;
    top: 6rem;
    padding: 0 1.5rem;
    font-size: 1.2rem;
}
.home-detail-container .photo {
    display: block;
    width: 17.5rem;
    height: auto;
    margin: 0 auto;
    padding: 2rem 0;
}
.home-detail-container .middle {
    text-align: center;
}
.home-detail-container .middle img {
    width: 80%;
}
.home-detail-container .detail-cont {
    
}
</style>