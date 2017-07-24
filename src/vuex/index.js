import vue from 'vue'
import vuex from 'vuex'
import movie from './module/movie'
import home from './module/home'


vue.use(vuex)

const store = new vuex.Store({
    modules: {
        movie,
        home,
    }
})

export default store