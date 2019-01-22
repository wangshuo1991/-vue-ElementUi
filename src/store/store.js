import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:3030';  // 增加默认的请求路径

const store = new Vuex.Store({
    state: {
        isLogin: true,
        tableData: []
    },
    mutations:{
        SETINFO (state, payload) {
            console.log('payload',payload);
            state.tableData = payload;
            console.log('state',state.tableData);
        }
    },
    actions: {
        // 取出数据
        getData (context) {
            axios({
                method: 'get',
                url: '/user'
            }).then((res)=>{
                /* console.log('res',res.data.data); */
                context.commit('SETINFO', res.data.data)
            });
        }
    },
    getters: {}
});

export default store;