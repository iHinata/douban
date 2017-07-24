import circleLoading from './circle.vue'

const circle = {
    install: function(Vue){
        Vue.component('Loading',circleLoading )
    }
}

export default circle

