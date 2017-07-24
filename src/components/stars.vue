<template>
    <div class="stars">
        <div class="star">
            <div v-if="stars.average">
                <i class="icon iconfont" v-for="item in classes" :class="item"></i>
                <span v-if="stars.average" v-show="!$route.params.id">{{stars.average}}</span>
            </div>
            <p v-if="!stars.average">暂无评分</p>
        </div>
    </div>  
</template>

<script>
export default {
    props: ['stars'],
    computed: {
        classes(){
            var num = this.stars.stars/10
            var arr = []
            var init = parseInt(num)
            for(var i=0;i<init;i++){
                arr.push('icon-star color')
            }
            if( num !== init ){
                arr.push('icon-banxing color')
            }
            while(arr.length < 5){
                arr.push('icon-xingxing')
            }
            return arr
        }
    }
}
</script>
<style>
.stars {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    font-size: 1rem;
}
.color {
    color: #f4ea2a;
}
.star {
    display:  flex;
    align-items: center;
}
.star p {
    color: #bebebe;
}
.star span {
    margin-left: 8px;
}
.star .iconfont {
    font-size: 1.2rem;
}
</style>