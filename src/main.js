//main.js 入口文件
//导入vue 用于挂在id = ”app"区域
import Vue from 'vue'
//引入组件
import App from './App.vue'

//全局注册组件 分为三个步骤
//1、导入组件
import count from './components/count.vue';
//2、使用Vue.conponent("newName",oldName);
Vue.component('Count',count);
//3、UI结构中直接使用

Vue.config.productionTip = false

//创建Vue实例
new Vue({
	//render 谁 谁就为根组件
  render: h => h(App),
}).$mount('#app')
