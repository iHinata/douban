<template>
    <div class="user">
        <tab></tab>
        <mhead>
            <span slot="text">我的</span>
            <div class="icon-group" slot="icon">
                <i class="icon iconfont icon-shezhi"></i>        
            </div> 
        </mhead>
    </div>

</template>

<script>
import tab from '@/components/tab'
import mhead from '@/components/mhead'
import login from '@/page/login/login'
import { mapState } from 'vuex'

export default {
    components: {
        tab,
        mhead,
        login
    },
    computed: {
        ...mapState({
            isLogin: state => state.login.isLogin,
        })
    },
}
</script>
<style>
.mhead {
    justify-content: center;
}
</style>