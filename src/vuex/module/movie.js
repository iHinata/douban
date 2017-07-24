import Vue from 'vue'

const state = {
    in_theaters: {},
    coming_soon: {},
    top250: {},
    detail: {},
    count: 10,
}

const mutations = {

}

const actions = {

    getMovies: ({commit,state}) => { 
       
        Vue.http.jsonp('http://api.douban.com/v2/movie/in_theaters?count='+ state.count)
        .then( res => {
            state.in_theaters = res.data     
        })
        Vue.http.jsonp('http://api.douban.com/v2/movie/coming_soon?count='+ state.count)
        .then( res => {
            state.coming_soon = res.data
        })
        Vue.http.jsonp('http://api.douban.com/v2/movie/top250?count='+ state.count)
        .then( res => {
            state.top250 = res.data
        })    
    },
    getMoviesDetail: ({commit,state},id) => {
        if(id){
            Vue.http.jsonp('https://api.douban.com/v2/movie/subject/'+ id)
            .then( res => {
                state.detail = res.data
                //console.log(state.detail)
            })
        }
        
    }
}

export default{
    state,
    mutations,
    actions
}

