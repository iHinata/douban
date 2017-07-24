<template>
    <div class="detail-page">

        <mhead>
            <i class="icon iconfont icon-fanhui" slot="back" @click="back"></i>
            <p class="title" slot="text">电影</p>
            <i class="icon iconfont icon-fenxiang" slot="icon"></i>
        </mhead>

        <div class="detail-banner" v-if="detail.images">
            <img :src="detail.images.large" alt="">
        </div>
        
        <div class="detail-content">
            <div class="information">
                <div class="inf-left" >
                    <h3 v-text="detail.title"></h3>
                    <p>{{ detail.year }} <span v-for="type in detail.genres">/ {{ type }} </span></p>
                    <p v-if="detail.countries">上映时间: {{ detail.year }}({{ detail.countries[0] }})</p>
                    <p v-if="detail.directors">导演: {{ detail.directors[0].name}}</p>
                </div>
                <div class="inf-right">
                    <p>豆瓣评分</p>
                    <p v-if="detail.rating.average">{{detail.rating.average}}</p>
                    <p>
                        <stars :stars="detail.rating"></stars>
                    </p>
                    <p>{{detail.ratings_count}}人评分</p>
                </div>
            </div>

            <div class="user-look">
                <span class="want">{{detail.wish_count}}人想看</span>
                <span class="looked">
                    <p>{{detail.collect_count}}人看过</p>
                    <i class="icon iconfont icon-xingxing"></i>
                    <i class="icon iconfont icon-xingxing"></i>
                    <i class="icon iconfont icon-xingxing"></i>
                    <i class="icon iconfont icon-xingxing"></i>
                    <i class="icon iconfont icon-xingxing"></i>
                </span>
            </div>

            <div class="user-buy">
                <span class="text">
                    <i class="icon iconfont icon-dingbutuanduigoupiao"></i>选座购票
                </span>
                <span class="price">￥33起<i class="icon iconfont icon-gengduo"></i></span>
            </div>

            <div class="introduce">
                <p>简介</p>
                <span  v-text="detail.summary"></span>
            </div>

            <div class="filmer">
                <p>影人</p>
                <div class="filmer_container">
                    <div class="filmer-card" v-for="(actor,i) in casts" :key="i">
                        <img :src="actor.avatars.small" alt="">
                        <p v-text="actor.name"></p>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mhead from '@/components/mhead'
import stars from '@/components/stars'
import { mapState,mapActions } from 'vuex'

export default {
    components: {
        mhead,
        stars,
    },
    computed: {
        ...mapState({
            detail: state => state.movie.detail,
        }),
        casts(){
            var arr = []
            arr = this.detail.casts.slice(0,3)
            return arr
        }
    },
    mounted(){
        var id = this.$route.params.id
        this.getMoviesDetail(id)
    },
    methods: {
        ...mapActions(['getMoviesDetail']),
        back(){
            this.$router.push('/audio/movie')
        }
    }
}
</script>
<style scoped>
.detail-page {
    color: #696969;
    font-size: 1.2rem;
}
.detail-page .mhead {
    border: none; 
    display: flex;
    justify-content: center;
    color: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    background: none;
}
.detail-content {
    padding: 0 1.5rem;
}
.mhead .iconfont {
    font-size: 24px;
    color: #fff;
}
.detail-page .icon-fanhui {
    position: absolute;
    left: -1.5rem;

}
.detail-page .icon-fenxiang {
    position: absolute;
    right: 1.5rem;
}
.detail-banner {
    width: 100%;
    height: 45rem;
    overflow: hidden;
    background: #433f5c; 
    display: flex;
    justify-content: center;
    align-items: center; 
}
.detail-banner img {
    padding-top: 5rem;
    width: 21rem;
}
.information {
    padding: 4rem 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}
.inf-left h3 {
    font-size: 20px;
    margin-bottom: 1rem;
    color: #111;
}
.inf-left p {
    margin-bottom: 0.5rem;
}
.inf-right {
    width: 10rem;
    height: 10rem;
    box-shadow: 0 0 1rem 0.5rem #ddd;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding: 3rem 0;
}
.inf-right p {
    text-align: center;   
}
.inf-right p:nth-child(2){
    font-size: 2.4rem;
    color: #fccb2d;
}
.user-look { 
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
    color: #fccb2d;
}
.want {
    width: 30%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    border: 1px solid #fccb2d;
    border-radius: 4px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
}
.looked {
    width: 65%;
    padding: 1rem 0;
    border: 1px solid #fccb2d;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
}
.looked p {
    margin-right: 0.8rem;
}
.looked .iconfont{
    font-size: 1.6rem;
}
.user-buy {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
}
.user-buy .text {
    display: flex;
    align-items: center;
}
.user-buy .text .iconfont {
    margin-right: 5px;
}
.user-buy .price {
    color: #fccb2d;
    display: flex;
    align-items: center;
}
.user-buy .price .iconfont {
    font-size: 1.6rem;
    color: #fccb2d;
}
.introduce {
    padding: 2rem 0;
    word-wrap: break-word;
}
.introduce p {
    margin: 1rem 0;
}
.introduce span {
    color: #666;
    letter-spacing: 0.5px;
    line-height: 3rem;
}
.filmer {
    padding: 2rem 0;
    
}
.filmer p {
    margin-bottom: 1rem;
    font-size: 1.6rem;
}
.filmer_container {
    box-sizing: border-box;
    position: relative;
    display: flex;
}
.filmer-card {
    text-align: center;
    padding: 0 1.5rem 1rem 0;
}
.filmer-card p {
    font-size: 1.2rem;
}
.filmer-card img {
    width: 7rem;
    height: 10rem;
}

</style>

