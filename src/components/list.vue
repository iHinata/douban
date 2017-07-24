<template>
    <div class="list" >
        <div class="list-title" v-if="list">
            <span>{{ list.title }}</span>
            <span>更多<i class="icon iconfont icon-gengduo"></i></span>
        </div>
        <div class="list-container" v-if="list.subjects">
            <card :card="list.subjects"></card>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'    

export default {
    props: ['list'],
    components: {
        card
    }
}
</script>
<style>
.list {
   width: 100%;
   height: 27rem;
   overflow: hidden;
   padding: 0 1.5rem;
   box-sizing: border-box;
   border-top: 1.5rem solid #eee;
   box-sizing: border-box;
}
.list-title {
    width: 100%;
    height: 6rem;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
}
.list-title span:first-child {
    font-weight: bold;
    font-size: 1.6rem;
}
.list-title span:last-child {
    font-size: 1.4rem;
    color: #19be6b;
    display: flex;
    align-items: center;
}

</style>