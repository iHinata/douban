<template>
    <div class="audio">
        <!--一级导航  -->
        <tab></tab>

        <!--头部  -->
        <mhead>
            <span slot="text">影音</span>
            <div class="icon-group" slot="icon">
                <i class="icon iconfont icon-sousuo_sousuo1"></i>
                <i class="icon iconfont icon-path322"></i>        
            </div>  
        </mhead>

        <!--  二级导航  -->
        <tab-second></tab-second>

        <div class="audio-container">
            read
        </div>
    </div>
</template>

<script>
import tab from '@/components/tab'
import mhead from '@/components/mhead'
import tabSecond from '@/components/tab-second'

export default {
    components: {
        tab,
        mhead,
        tabSecond,
    },
   
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
