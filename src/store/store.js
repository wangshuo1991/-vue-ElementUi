import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:3030';  // 增加默认的请求路径

const store = new Vuex.Store({
    state: {
        isLogin: true,
        tableData: [],
        active: 0,
        temp: []
    },
    mutations:{
        SETINFO (state, payload) {
            state.tableData = payload;     
        },
        increment (state) { // 下一步 active加一
            if(state.active>=3) return;
            state.active++;
        },
        appendTemp (state,data) {
            state.temp.push(data);
        },
        clearTemp (state) {
            state.temp = [];
        },
        goBack (state) {
            state.active = 0;
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