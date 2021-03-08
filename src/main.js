import { createApp } from 'vue'
// import Antd from 'ant-design-vue';
import { Button, Modal } from 'ant-design-vue';
// import Button from 'ant-design-vue/lib/button';

import App from './App.vue'
// import 'ant-design-vue/dist/antd.css';
// import { DatePicker } from "ant-design-vue";
// import "ant-design-vue/dist/antd.css"; 
// import 'ant-design-vue/lib/button/style';
const app = createApp(App)
app.config.devtools = process.env.NODE_ENV === 'development'

window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor
// const app = createApp()
app.config.productionTip = false;
// 分环境处理
if (process.env.NODE_ENV === 'development') {
    if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
    // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例 window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
    }
    app.config.devtools = true
  }

app.use(Button);
app.use(Modal);
// app.config.globalProperties.$message = message;
// app.use(Antd);

app.mount('#app');
