<template>
    <div class="card">
        <router-link tag="div" v-for="(item,i) in card" :key="i" class="card-item"
        :to="{ name: 'detail', params: {id: item.id} }">
            <img :src="item.images.large" alt="">
            <p v-text="item.title"></p>
            <stars :stars="item.rating"></stars>
        </router-link>    
    </div>
    
</template>

<script>
import stars from '@/components/stars'

export default {
    props: ['card'],
    components: {
        stars,
        scroll
    },
}
</script>
<style>
.card {
    display: flex;
    min-width: 120rem;
}
.card-item {
    padding: 0 1rem 1rem 1rem;
    width: 12rem;
    color: #666;
}
.card-item img {
    width: 10rem;
    height: 15rem;
}
.card-item p {
    font-size: 1rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>