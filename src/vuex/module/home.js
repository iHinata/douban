import Vue from 'vue'

const state = {
    home: {} ,
    count: 3
}

const mutations = {
    jsonp(state){
        Vue.http.jsonp('https://api.douban.com/v2/event/list?loc=108288&count='+state.count)
        .then( res => {
            state.home = res.data.events
            console.log(localStorage.home)
        })    
    }
}


const actions = {
    getHomeData: ({commit,state},flag) => {
        if(flag) {
            state.count += 3
            commit('jsonp')
        }else {
            Vue.http.jsonp('https://api.douban.com/v2/event/list?loc=108288&count='+state.count)
            .then( res => {
                state.home = res.data.events
                //console.log(res.data.events)
            })
        }
        
    },
    
}

export default {
    state, mutations, actions
}