<template>
    <div class="audio">
        <!--  一级导航  -->
        <tab></tab>

        <!--  头部  -->
        <mhead>
            <span slot="text">影音</span>
            <div class="icon-group" slot="icon">
                <i class="icon iconfont icon-sousuo_sousuo1"></i>
                <i class="icon iconfont icon-path322"></i>        
            </div>  
        </mhead>

        <!--  二级导航  -->
        <tab-second></tab-second>

        <Loading v-show="isLoading"></Loading> 

        <div class="audio-container" v-show="!isLoading">  

            <div id="in_theaters">
                <list :list="in_theaters"></list>
            </div>

            <div id="coming_soon">
                <list :list="coming_soon"></list>
            </div>

            <div id="top250">
                <list :list="top250"></list>
            </div> 

        </div>
    </div>
</template>

<script>
import tab from '@/components/tab'
import mhead from '@/components/mhead'
import tabSecond from '@/components/tab-second'
import list from '@/components/list'
import Fmover from 'finger-mover'
import simulationScrollX from 'simulation-scroll-x'
import { mapState,mapActions } from 'vuex'

export default {
    components: {
        tab,
        mhead,
        tabSecond,
        list,
    },
    data(){
        return {
            isLoading: true,
            fm_in: null,
            fm_com: null,
            fm_top: null,
        }
    },
    computed: {
        ...mapState({
            in_theaters: state => state.movie.in_theaters,
            coming_soon: state => state.movie.coming_soon,
            top250: state => state.movie.top250,
        })
    },
    mounted(){   
        this.getMovies()
        setTimeout(() => {
            this.isLoading = !this.isLoading
            this.$nextTick(() => {
                this.initFm()
            })
        },1500)
    },
    methods: {
        ...mapActions(['getMovies']),
        initFm(){
            this.fm_in = new Fmover({
                el: '#in_theaters .card',
                plugins: [
                    simulationScrollX({
                        scrollBar: false,
                        bounce: true,  
                    })
                ],
            })
            this.fm_com = new Fmover({
                el: '#coming_soon .card',
                plugins: [
                    simulationScrollX({
                        scrollBar: false,
                        bounce: true,
                    })
                ]
            })
            this.fm_top = new Fmover({
                el: '#top250 .card',
                plugins: [
                    simulationScrollX({
                        scrollBar: false,
                        bounce: true,
                    })
                ]
            })
        }, 
    }
}
</script>
<style scoped>
.mhead {
    justify-content: center;

}
.audio-container {
    margin-top: 10rem;
    min-height: 50rem;
}

</style>
