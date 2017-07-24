<template>
    <div class="group">
        <tab></tab>
        <mhead>
            <span slot="text">小组</span>
            <div class="icon-group" slot="icon">
                <i class="icon iconfont icon-chengyuan"></i>
                <i class="icon iconfont icon-path322"></i>        
            </div> 
        </mhead>
    </div>
</template>

<script>
import tab from '@/components/tab'
import mhead from '@/components/mhead'

export default {
    components: {
        tab,
        mhead
    }
}
</script>
<style scoped>
.mhead {
    justify-content: center;
}

</style>