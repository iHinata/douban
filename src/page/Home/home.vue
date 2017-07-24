<template>
    <div class="home">
        <tab></tab>
        <mhead>
            <div class="mhead-left" slot="search">
                <i class="icon iconfont icon-sousuo_sousuo1" ></i>
                <input type="" name="" value="">
                <i class="icon iconfont icon-saoyisao"></i>
            </div>
            <div class="mhead-right"  slot="icon">
                <i class="icon iconfont icon-path322"></i>
            </div>
        </mhead>
        <div class="recommend">
            <loading v-show="isLoading"></loading>
            
            <div class="recommend-container" v-show="!isLoading">
                <div class="pull-down-dom">下拉刷新</div>
                <p class="zhanlan">随便看看</p>
                
                <div class="recommend-card" v-for="(item,i) in home" :key="i">
                    <router-link tag="div" class="recomend-card-link"
                    :to="{ name: 'homeDetail', params: {homeId: item.id} }" >
                        <div class="card-note">
                            <h4>{{ item.title }}</h4>
                            <p>
                                <span>时间: {{ item.time_str }}</span>
                                <span>地点: {{ item.loc_name }}</span>
                            </p>
                            <span class="tag">标签: {{ item.category_name }}</span>
                        </div>
                        <div class="card-pic">
                            <img :src="item.image" alt="" />
                        </div>
                    </router-link>
                </div>
                
                <div class="load-more">加载更多</div>
            </div>
        </div>
    </div>
</template>

<script>
import tab from '@/components/tab'
import mhead from '@/components/mhead'
import Fmover from 'finger-mover'
import simulationScrollY from 'simulation-scroll-y'
import { mapState,mapActions } from 'vuex'

export default {
    components: {
        tab,
        mhead
    },
    data(){
        return {
            isLoading: true,
            fm: null,
        }
    },
    computed: {
        ...mapState({
            home: state => state.home.home,
        })
    },
    mounted(){

        setTimeout(() => {
            this.getHomeData()
            this.isLoading = false
            this.$nextTick(() => {
                this.fm[0].refreshSize()        
            })
        },1000)
        this.initFm()
    },
    methods: {
        ...mapActions(['getHomeData']),
        initFm(){
            var vm = this
            var pullDownDom = document.querySelector('.pull-down-dom')
            var loadMoreDom = document.querySelector('.load-more')
            this.fm = new Fmover({
                el: '.recommend-container',
                plugins: [
                    simulationScrollY({
                        pullDown: {
                            use: true,
                            distance: 50,
                            onBegin: function (currentY) {
                                // 使用 currentY 计算出下拉百分比
                                var proportion = parseInt(currentY / 50 * 100)
                                pullDownDom.style.display = 'block'
                                if (proportion >= 100) {
                                    proportion = 100
                                    
                                    pullDownDom.innerHTML = '释放加载'
                                } else {
                                    pullDownDom.innerHTML = proportion + '%'
                                }

                            },
                            onActive: function () {
                                var that = this
                                pullDownDom.innerHTML = '加载中...'
                                //发送网络请求
                                vm.getHomeData()
                                // 请求数据成功后，调用 refresh() 方法
                                setTimeout(function () {
                                    that.refresh(function () {
                                        pullDownDom.innerHTML = '刷新成功'
                                    })
                                }, 1500)
                            },
                            onAfter: function (currentY) {
                                if (currentY < 50) {
                                    setTimeout(function() {
                                        pullDownDom.innerHTML = '刷新成功'
                                        pullDownDom.style.display = 'none'        
                                    }, 500);   
                                }
                            }
                        },
                        loadMore: {
                            distance: 100,
                            onLoadMore: function () {
                                loadMoreDom.style.display = "block"
                                loadMoreDom.innerHTML = '加载中...'
                                // 发送网络请求
                                vm.getHomeData(true)

                                vm.$nextTick(() => {
                                    loadMoreDom.innerHTML = '加载更多'
                                    // 调用 loadEnd() 方法重置加载更多操作
                                    this.loadEnd()
                                    this.refreshSize()
                                
                                })
                                
                            }

                        }
                    })
                ]
            })
        }
    }
}
</script>
<style scoped>
.mhead {
    background: #19be6b;
    padding: 0 1.5rem;
    box-sizing: border-box;
}

.mhead-left {
    width: 85%;
    height: 3.6rem;
    background: #fff;
    display: flex;
    align-items: center;
    border-radius: 5px;
    position: relative;
}
.mhead-left .icon-sousuo_sousuo1 {
    padding: 0 1rem;
}
.mhead-left .icon-saoyisao {
    position: absolute;
    right: 1rem;
}
.mhead-left input {
    border: none;
    outline: none;
    width: 70%;
    box-sizing: border-box;
}
.mhead .iconfont {
    color: #19be6b;
    font-size: 16px;
    margin-left: 0;
}
.mhead-right {
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mhead-right .iconfont {
    color: #fff;
    margin-left: 1.5rem;
}
.recommend .spinner {
    margin: 100px auto;
}
.recommend {
    width: 100%;
    min-height: 78rem;
    position: absolute;
    top: 8rem;
    bottom: 0;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    padding: 0 1.5rem;
}
.recommend-container {
    width: 100%;
    position: absolute;
}
.recommend-container .zhanlan{
    padding: 3rem 0 1.5rem 0;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 2px;
}
.recommend-container .pull-down-dom, .recommend-container .load-more{
    width: 100%;
    text-align: center;
    color: #19be6b;
    display: none;
}
.recomend-card-link {
    border-top: 1px solid #eee;
    padding: 2rem 0;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
}
.recommend-card .card-note {
    width: 55%;
    font-size: 1.2rem;
}
.recommend-card .card-note h4 {
    font-size: 1.6rem;
}
.recommend-card .card-note p {
    color: #999;
    display: flex;
    flex-direction: column;
    padding: 3rem 0;
}
.recommend-card .card-pic {
    width: 45%;
    text-align: center;
}
.recommend-card .card-pic img {
    max-width: 10rem;
}

</style>