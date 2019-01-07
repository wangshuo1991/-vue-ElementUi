import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tableData: [
            {
            date: '2018-10-01',
            id: '410121197802214512',
            name: '郑钧',
            gender: '男',
            phone: '13245678912',
            age: 35,
            state: '未预约',
            shop: '上海徐汇分院'
            },
            {
            date: '2018-09-26',
            name: '刘芸',
            id: '210001199209142010',
            gender: '女',
            phone: '17849877892',
            age: 24,
            state: '预约',
            shop: '上海浦东一院'
            },
            {
            date: '2018-09-19',
            name: '华少',
            id: '512101198712010112',
            gender: '男',
            phone: '15603801248',
            age: 42,
            state: '未预约',
            shop: '上海卢湾分院'
            },
            {
            date: '2018-09-09',
            name: '权志龙',
            id: '410111198802161212',
            gender: '男',
            phone: '18210467892',
            age: 29,
            state: '未预约',
            shop: '上海徐汇分院'
            },
            {
            date: '2018-08-29',
            name: '璐璐',
            id: '602101198904061208',
            gender: '女',
            phone: '13812690124',
            age: 20,
            state: '未预约',
            shop: '上海虹桥分院'
            },
            {
            date: '2018-10-01',
            name: '武媚娘',
            id: '810001199212122010',
            gender: '女',
            phone: '15021789562',
            age: 27,
            state: '预约',
            shop: '上海宝山分院'
            },
            {
            date: '2018-11-01',
            name: '苏定方',
            id: '410001199909142010',
            gender: '男',
            phone: '17912456974',
            age: 45,
            state: '预约',
            shop: '深圳宝安分院'
            },
            {
            date: '2018-11-15',
            name: '李靖',
            id: '310001197809142010',
            gender: '男',
            phone: '18974582936',
            age: 59,
            state: '未预约',
            shop: '北京朝阳分院'
            }
        ]
    },
    mutations: {

    },
    getters: {}
});

export default store;